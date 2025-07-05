import React, { useState } from 'react'
import { Gi3dGlasses } from "react-icons/gi";
import { TbPacman } from "react-icons/tb";




function Header({ setFormActive }) {

  return (
    <header className='header'>
       <Gi3dGlasses  className='logo'/>
       <ul className='list'>
        <li>ГЛАВНАЯ</li>
        <li>КОНТАНКТЫ</li>
        <li>О НАС</li>
       </ul>
       <button className='loginBtn' onClick={()=>setFormActive(true)}><TbPacman className='pacBtn'/>ВОЙТИ</button>
    </header>
    
  )
}

export default Header