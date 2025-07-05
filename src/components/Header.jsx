import React, { useState } from 'react'
import { Gi3dGlasses } from "react-icons/gi";
import { TbPacman } from "react-icons/tb";
import { BrowserRouter as Routes, Route, Link} from 'react-router-dom'
import Contacts from '../pages/Contacts';
import About from '../pages/About';




function Header({ setFormActive }) {

  return (
    <header className='header'>
       <Gi3dGlasses  className='logo'/>
       <nav className='list'>
        <Link to='/'>ГЛАВНАЯ</Link>
        <Link to='contacts'>КОНТАНКТЫ</Link>
        <Link to='about'>О НАС</Link>
       </nav>
       <button className='loginBtn' onClick={()=>setFormActive(true)}><TbPacman className='pacBtn'/>ВОЙТИ</button>
    </header>

  )
}

export default Header