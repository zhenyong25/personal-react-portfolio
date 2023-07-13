import React from "react";
import './header.css';  
import CTA from "./CTA";
import ME from "../../assets/profile_pic.png"
import HeaderSocials from "./HeaderSocials";

const Header = () => {
    return(
        <header>
            <div id="home" className="container header__container">
                <h5 className="header__intro">Hello I'm</h5>
                <h1>Zhen Yong</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA/>
                <HeaderSocials/>

                <div className="me">
                    <img src={ME} alt="me"></img>
                </div>

                {/* <a href='#contact' className="scroll__down">Scroll Down</a> */}
            </div>
        </header>
    )
}

export default Header;