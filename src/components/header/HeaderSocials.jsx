// rafce 
/* The value "_blank" indivates that the linked page should be opened in a new browser tab or window  */
import React from 'react'

// react icons : https://react-icons.github.io/react-icons/
import {FaGithub} from 'react-icons/fa'
import {FaHackerrank} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/zhenyong25" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://leetcode.com/BlueKnight/" target="_blank" rel="noreferrer"><SiLeetcode/></a>
        <a href="https://www.hackerrank.com/ZhenYong" target="_blank" rel="noreferrer"><FaHackerrank/></a>
    </div>
  )
}

export default HeaderSocials