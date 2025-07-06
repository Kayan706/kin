import React, {  useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext';


function UserLogin({ children, email, password, setActive, clearForm }) {
    const { setUser } = useContext(UserContext);
    const nav = useNavigate(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const checkUser = await fetch(`http://localhost:3001/users?email=${email}&password=${password}`);
            const check = await checkUser.json();

            if (check.length === 0) {
                alert('Пользователь с таким EMAIL не существует или неверный пароль!')
                return
            } else {
                setUser(check[0])
                setActive(false)
                nav('/personalAccount')
                clearForm()
            }
            if (!checkUser.ok) {
                throw new Error(checkUser.message || 'Ошибка при авторизации')
            }


        } catch (error) {
            console.error('Ошибка Авторизации', error.message);
            alert(error.message)
        }
        
    }
    
    
    return (
        <form  className='form_content' onSubmit={e => handleSubmit(e)}>{children}</form>
    )
}

export default UserLogin