import React, { useState, useEffect }  from "react";
import './portfolio.css';  
import {data} from '../portfolio/portfolio-constants'

// import Swiper core and required modules
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {AiOutlineClose} from 'react-icons/ai'

const Portfolio = () => {

  const [modal, setModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleViewDetailsClick = (id) => {
    setSelectedItemId(id);
    setModal(true);
  };

  const [slidesPerView, setSlidesPerView] = useState(3);

  const updateSlidesPerView = () => {
    // Define the breakpoint at which you want to change the slidesPerView value
    const breakpoint = 768; // For example, for devices with width less than 768px

    // Check the screen width and update the slidesPerView accordingly
    if (window.innerWidth < breakpoint) {
      setSlidesPerView(1);
    } else {
      setSlidesPerView(3);
    }
  };

    useEffect(() => {
        // Add event listener on component mount
        window.addEventListener('resize', updateSlidesPerView);

        // Call the function on component mount to set initial value
        updateSlidesPerView();

        // Remove event listener on component unmount
        return () => {
        window.removeEventListener('resize', updateSlidesPerView);
        };
    }, []);

  const selectedItem = data.find((item) => item.id === selectedItemId);

    return(
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
        
            <Swiper className="container portfolio__container"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={40}
                slidesPerView={slidesPerView}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}>

                    {
                        data.map(({id, image, title})=>{
                            return (
                                    <SwiperSlide key={id} className='portfolio__item'>
                                        
                                        <div className="portfolio__item-image">
                                            <img src={image} alt="" className="fit-image"/>
                                        </div>

                                        <h4>{title}</h4>

                                        <div className="portfolio__item-cta">
                                            <button onClick={()=>{handleViewDetailsClick(id)}} className='btn btn-primary'>
                                                View Details
                                            </button>
                                        </div>
                                    </SwiperSlide>  
                            )
                        })
                    }
            </Swiper>
            
            {modal && (
                <div className="modal">
                        <div className="modal-content"> 
                            <button className="close-modal" onClick={()=>{setModal(false)}}>
                                <AiOutlineClose/>
                            </button>

                            <div className="modal-title">{selectedItem.title}</div>
                            <div className="modal-description">{selectedItem.description}</div>
                            <div className="modal-techstack">Created with</div>
                            <div className="modal-techstack-container">
                                <ul className="techstack-icons">
                                    {selectedItem.techstack.map((tech, index) => (
                                        <li className="techstack-icon" key={index}>{tech}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="portfolio__item-cta">
                                <a href={selectedItem.github} className='btn'>Github</a>
                                <a href={selectedItem.demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
                            </div>
                        </div>                              
                </div>
            )}
        </section>
        
    )
}

export default Portfolio;