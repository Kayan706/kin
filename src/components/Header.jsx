import React, { useState } from 'react'




function Header({ setFormActive }) {

  return (
    <header className='header'>
       <img src="#" alt="logo" /> 
       <ul className='list'>
        <li>Главная</li>
        <li>Контакты</li>
        <li>Билеты</li>
       </ul>
       <button onClick={()=>setFormActive(true)}>Личный кабинет</button>
    </header>
    
  )
}

export default Header