// rafce 
/* The value "_blank" indivates that the linked page should be opened in a new browser tab or window  */
import React from 'react'

// react icons : https://react-icons.github.io/react-icons/
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/shoon-zhen-yong-4574a41aa/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/zhenyong25" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.instagram.com/zhenyonggg/" target="_blank" rel="noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials