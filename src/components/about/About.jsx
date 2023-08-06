import React from "react";
import './about.css';  
import ME from "../../assets/bali-profile-pic.jpg"

// REACT ICONS
import {FaUniversity} from 'react-icons/fa'
import {BsFillBookFill} from 'react-icons/bs'
import {VscFolderLibrary} from 'react-icons/vsc'
import {MdOutlineTravelExplore} from 'react-icons/md'

const About = () => {
    return(
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

        <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Me"></img>
                    </div>
                </div>
            
            <div className="about__content">
               
                <div className="about__cards">
                    
                {/* Card 1 */}
                    <article className="about__card">
                        <FaUniversity className="about__icon"/>
                        <h5>University</h5>
                        <small>Nanyang Technological University (NTU), Singapore</small>
                    </article>
                

                {/* Card 2 */}
                    <article className="about__card">
                        <BsFillBookFill className="about__icon"/>
                        <h5>Degree</h5>
                        <small>Electrical and Electronic Engineering (Specialize in Computer Engineering)</small>
                    </article>
 

                {/* Card 3 */}
                    <article className="about__card">
                        <VscFolderLibrary className="about__icon"/>
                        <h5>Projects</h5>
                        <small>5+ Completed Projects </small>
                    </article>

                {/* Card 4 */}
                <article className="about__card">
                        <MdOutlineTravelExplore className="about__icon"/>
                        <h5>Hobby</h5>
                        <small>Travel , Sports and enjoying watching movies !</small>
                    </article>
                </div>

                {/* Just type "lorem" */}
                <div className="personal__introduction">
                    <p>
                    </p>
                </div>
                
            </div>
        </div>

        </section>
    )
}

export default About; 