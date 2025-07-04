import React, { useEffect, useState } from 'react'
import Button from './Button'
import UserRegistration from './UserRegistration'
import UserLogin from './UserLogin'
import TabSection from './TabSection'


function Form({ active, setActive }) {
    const [tab, setTab] = useState('UserLogin')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailClear, setEmailClear] = useState(false)
    const [passwordClear, setPasswordClear] = useState(false)
    const [emailError, setEmailError] = useState('Email не может быть пустым!')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым!')
    const [formValid, setFomValid] = useState(false)






    useEffect(() => {
        if (emailError || passwordError) {
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

    const passwordHandel = (e) => {
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
                    <UserRegistration email={email} password={password} setActive={setActive}>
                        {(emailClear && emailError) && <div className='formError'>{emailError}</div>}
                        <input onChange={e => emailHandel(e)} value={email} onBlur={(e) => bluerHandel(e)} name='email' type='text' placeholder='Email' />
                        {(passwordClear && passwordError) && <div className='formError'>{passwordError}</div>}
                        <input onChange={e => passwordHandel(e)} value={password} onBlur={(e) => bluerHandel(e)} name='password' type="password" placeholder='password' />
                        <Button disabled={!formValid} type='submit'>Регистрация</Button>
                    </UserRegistration>
                )}
                {tab === 'UserLogin' && (
                    <UserLogin email={email} password={password} setActive={setActive}>
                        {(emailClear && emailError) && <div className='formError'>{emailError}</div>}
                        <input onChange={e => emailHandel(e)} value={email} onBlur={(e) => bluerHandel(e)} name='email' type='text' placeholder='Email' />
                        {(passwordClear && passwordError) && <div className='formError'>{passwordError}</div>}
                        <input onChange={e => passwordHandel(e)} value={password} onBlur={(e) => bluerHandel(e)} name='password' type="password" placeholder='password' />
                        <Button disabled={!formValid} type='submit'>Авторизироваться</Button>
                    </UserLogin>
                )}
            </div>
        </div>
    )
}

export default Form