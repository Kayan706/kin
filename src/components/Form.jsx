import React, { useEffect, useState } from 'react'
import Button from './Button'
import UserRegistration from './UserRegistration'
import UserLogin from './UserLogin'
import TabSection from './TabSection'


function Form({ active, setActive }) {
    const [tab, setTab] = useState('UserLogin')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName]=useState('')
    const [nameClear, setNameClear] = useState(false)
    const [emailClear, setEmailClear] = useState(false)
    const [passwordClear, setPasswordClear] = useState(false)
    const [nameError, setNameError] = useState('Name не может быть пустым!')
    const [emailError, setEmailError] = useState('Email не может быть пустым!')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым!')
    const [formValid, setFomValid] = useState(false)

    const clearForm = () => {
        setName('')
        setEmail('');
        setPassword('')
    }





    useEffect(() => {
        if (emailError || passwordError || nameError) {
            setFomValid(false)
        } else {
            setFomValid(true)
        }
    }, [emailError, passwordError])

    const emailHandel = (e) => {
        setEmail(e.target.value)
        const re = /\S+@\S+\.\S+/;

        if (!re.test(String(e.target.value).toLocaleLowerCase())) {
            setEmailError('Email некорректный!')
        } else {
            setEmailError('')
        }
    }

    const nameHandel = (e) => {
        setName(e.target.value)

        if (!e.target.value) {
            setNameError('Имя не может быть пустым!')

        } else {
            setNameError('')
        }
    }

    const  passwordHandel= (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 4) {
            setPasswordError('Пароль Должен быть длинее 4 символов')
            if (!e.target.value) {
                setPasswordError('Пароль не может быть пустым!')
            }
        } else {
            setPasswordError('')
        }
    }


    const bluerHandel = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailClear(true)
                break
            case 'password':
                setPasswordClear(true)
                break
        }
    }


    return (

        <div className={active ? 'form active' : 'form'} onClick={() => setActive(false)}>
            <Button className='btnClose'>X</Button>
            <div onClick={e => e.stopPropagation()}>
                <TabSection isActive={tab} onChange={(current) => { setTab(current) }} />
                {tab === 'UserRegistration' && (
                    <UserRegistration clearForm={clearForm} balance={0} name={name} email={email} password={password} setActive={setActive}>
                        {(nameClear && nameError) && <div className='formError'>{nameError}</div>}
                        <input className='formInput' onChange={e=>nameHandel(e)} onBlur={(e) => bluerHandel(e)} value={name} name='name' type='text' placeholder='Name' />
                        {(emailClear && emailError) && <div className='formError'>{emailError}</div>}
                        <input className='formInput' onChange={e => emailHandel(e)} value={email} onBlur={(e) => bluerHandel(e)} name='email' type='text' placeholder='Email' />
                        {(passwordClear && passwordError) && <div className='formError'>{passwordError}</div>}
                        <input className='formInput' onChange={e => passwordHandel(e)} value={password} onBlur={(e) => bluerHandel(e)} name='password' type="password" placeholder='password' />
                        <Button className='btnSub' disabled={!formValid} type='submit'>Регистрация</Button>
                    </UserRegistration>
                )}
                {tab === 'UserLogin' && (
                    <UserLogin clearForm={clearForm} email={email} password={password} setActive={setActive}>
                        {(emailClear && emailError) && <div className='formError'>{emailError}</div>}
                        <input className='formInput' onChange={e => emailHandel(e)} value={email} onBlur={(e) => bluerHandel(e) } name='email' type='text' placeholder='Email' />
                        {(passwordClear && passwordError) && <div className='formError'>{passwordError}</div>}
                        <input className='formInput' onChange={e => passwordHandel(e)} value={password} onBlur={(e) => bluerHandel(e)} name='password' type="password" placeholder='Password' />
                        <Button className='btnSub' disabled={!formValid} type='submit'>Авторизироваться</Button>
                    </UserLogin>
                )}
            </div>
        </div>
    )
}

export default Form