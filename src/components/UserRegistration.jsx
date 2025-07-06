import React from 'react'

function UserRegistration({ children, name, email, password, setActive, clearForm, balance }) {
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const checkUser = await fetch(`http://localhost:3001/users?email=${email}`);
            const check = await checkUser.json();

            if (check.length > 0) {
                alert('Пользователь с таким email уже существует!')
                return
            } else {
                setActive(false)
            }

            const response = await fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password, name, balance })
            });

            const data = await response.json();
            clearForm()

            if (!response.ok) {
                throw new Error(data.message || 'Ошибка при авторизации')
            }

        } catch (error) {
            console.error('Ошибка Авторизации', error.message);
            alert(error.message)
        }
        
        
    };

    return (
        <form className='form_content' onSubmit={e => handleSubmit(e)}>{children}</form>
    )

};
export default UserRegistration