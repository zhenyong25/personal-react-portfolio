import React from "react";
import './about.css';  
import ME from "../../assets/profile_pic.png"

// REACT ICONS
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

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
                        <FaAward className="about__icon"/>
                        <h5>Experience</h5>
                        <small>3+ Years Working</small>
                    </article>
                

                {/* Card 2 */}
                    <article className="about__card">
                        <FiUsers className="about__icon"/>
                        <h5>Clients</h5>
                        <small>200+ Worldwide</small>
                    </article>
 

                {/* Card 3 */}
                    <article className="about__card">
                        <VscFolderLibrary className="about__icon"/>
                        <h5>Projects</h5>
                        <small>80+ Completed Projects</small>
                    </article>
                </div>

                {/* Just type "lorem" */}
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis natus ab provident quam, 
                    tempora accusamus odio vel, illo reiciendis, optio hic facilis voluptatem! Deserunt vel quasi 
                    aliquid sapiente veniam itaque?
                </p>
                <a href="#contact" className="btn btn-primary">Let's Talk</a>
            </div>
        </div>

        </section>
    )
}

export default About; 