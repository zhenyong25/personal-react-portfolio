import React from "react";
import './portfolio.css';  
import ME from '../../assets/profile_pic.png'

const data = [
    {
        id: 1,
        image: ME,
        title: 'Final Year Project',
        github: 'https://github.com/zhenyong25',
        demo: 'https://github.com/zhenyong25'
    },
    {
        id: 2,
        image: ME,
        title: 'Web Application Project',
        github: 'https://github.com/zhenyong25',
        demo: 'https://github.com/zhenyong25'
    },
    {
        id: 3,
        image: ME,
        title: 'Design and Innovation Project',
        github: 'https://github.com/zhenyong25',
        demo: 'https://github.com/zhenyong25'
    },
]


const Portfolio = () => {
    return(
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">

                {
                    data.map(({id, image, title, github, demo})=>{
                        return (
                            <article key={id} className='portfolio__item'>

                                <div className="portfolio__item-image">
                                    <img src={image} alt="" className="fit-image"/>
                                </div>

                                <h4>{title}</h4>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn'>Github</a>
                                    <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
                                </div>
                            </article>    
                        )
                    })
                }
            
            </div>
        </section>
    )
}

export default Portfolio;