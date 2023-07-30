import React from "react";
import './footer.css';  

// REACT ICONS
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
    return(
        <footer>
            <a href="#home" className='footer__logo'>Zhen Yong</a>

            <ul className="permalinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                {/* <li><a href="#testimonials">Testimonials</a></li> */}
                <li><a href="#contacts">Contacts</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/shoon.zhenyong.1/"><FaFacebookF/></a>
                <a href="https://www.instagram.com/zhenyonggg/"><BsInstagram/></a>
                <a href="https://www.linkedin.com/in/shoon-zhen-yong-4574a41aa/"><BsLinkedin/></a>
            </div>

            <div className="footer__copyright">
                <small> &copy; ZHEN YONG. All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer;