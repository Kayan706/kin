import React from 'react'
import Button from './Button'

function TabSection({active, onChange}) {
    return (
        <div className='buttonSing'>
            <Button isActive={active === 'UserLogin'} onClick={()=>{onChange('UserLogin')}} className='btn' type='button'>Авторизация</Button>
            <Button isActive={active === 'UserRegistration'} onClick={()=>{onChange('UserRegistration')}} className='btn' type='button'>Регистрация</Button>
        </div>
    )
}

export default TabSection