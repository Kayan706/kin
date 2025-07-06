import React, { useState, useContext, useEffect } from 'react'
import { Gi3dGlasses } from "react-icons/gi";
import { TbPacman } from "react-icons/tb";
import { BrowserRouter as Routes, Route, Link} from 'react-router-dom'
import Contacts from '../pages/Contacts';
import About from '../pages/About';
import { UserContext } from '../context/UserContext';



function Header({ setFormActive }) {
  const [tab, setTab]=useState('off')
  const {user} = useContext(UserContext)
  useEffect(()=>{
    if(user){
      setTab('on')
    }
  },[user])
  return (
    <header className='header'>
       <Link to='/'><Gi3dGlasses  className='logo'/></Link>
       <nav className='list'>
        <Link to='/'>ГЛАВНАЯ</Link>
        <Link to='contacts'>КОНТАНКТЫ</Link>
        <Link to='about'>О НАС</Link>
       </nav>

       {tab == 'on' && (<h3>{user.email}</h3>)}
       {tab == 'off' && (<button className='loginBtn' onClick={()=>setFormActive(true)}><TbPacman className='pacBtn'/>ВОЙТИ</button>)}
       
   
    </header>

  )
}

export default Header