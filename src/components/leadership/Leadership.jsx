import React, { useState, useEffect }  from "react";
import './leadership.css';  
import {data} from '../leadership/leadership-constants'

// import Swiper core and required modules
import { Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {AiOutlineClose} from 'react-icons/ai'

const Leadership = () => {

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
      setSlidesPerView(2);
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
        <section id="leadership">
            <h5>Leadership Experiences</h5>
            <h2>Community Involvement</h2>
        
            <Swiper className="container portfolio__container"
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={slidesPerView}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 10,
                  depth: 100,
                  modifier: 3,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}>

                    {
                        data.map(({id, image, title})=>{
                            return (
                                    <SwiperSlide key={id} className='leadership__item'>
                                        <div className="leadership__item-image">
                                            <img src={image} alt="" className="fit-image"/>
                                        </div>
                                
                                        <h4>{title}</h4>

                                        <div className="leadership__item-cta">
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
                            <div className="modal-techstack-container">
                            </div>
                        </div>                              
                </div>
            )}
        </section>
        
    )
}

export default Leadership;