import React from "react";
import './nav.css';  
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {MdWork} from 'react-icons/md'

import {useState} from 'react'

/* #about - goes to section with id = "about" */
const Nav = () => {

    // initial value is '#'
    const [activeNav, setActiveNav] = useState('#home')

    return (
        <nav>
            <a href="#home" onClick={()=>setActiveNav('#')} className={activeNav==='#home'?'active':''}><AiOutlineHome/></a>
            <a href="#about" onClick ={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''}><AiOutlineUser/></a>
            <a href="#experience" onClick ={()=>setActiveNav('#experience')} className={activeNav==='#experience'?'active':''}><BiBook/></a>
            <a href="#portfolio" onClick ={()=>setActiveNav('#portfolio')} className={activeNav==='#portfolio'?'active':''}><RiServiceLine/></a>
            <a href="#internship" onClick ={()=>setActiveNav('#internship')} className={activeNav==='#internship'?'active':''}><MdWork/></a>
            <a href="#contacts" onClick ={()=>setActiveNav('#contacts')} className={activeNav==='#contacts'?'active':''}><BiMessageSquareDetail/></a>  
        </nav>
    )
}

export default Nav;
