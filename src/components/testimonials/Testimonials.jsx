import React from "react";
import './testimonials.css';  
import ME from '../../assets/profile_pic.png'

// import Swiper core and required modules
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: ME,
        name: 'Zhen Yong',
        review: 'Good'
    },

    {
        avatar: ME,
        name: 'Zhen Yong',
        review: 'Good'
    },

    {
        avatar: ME,
        name: 'Zhen Yong',
        review: 'Good'
    },

    {
        avatar: ME,
        name: 'Zhen Yong',
        review: 'Good'
    },

    {
        avatar: ME,
        name: 'Zhen Yong',
        review: 'Good'
    },

]

const Testimonials = () => {
    return(
        <section id="Testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            {/* Parent = "Swiper" ; Children = "SwiperSlide" */}
            <Swiper className="container testimonials__container"
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >

                {
                    data.map(({avatar,name,review}, index)=>{
                        return(
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt=""/> 
                                </div>
                                <h5>{name}</h5>
                                <small className='client_review'>
                                        {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
                
            </Swiper>

        </section>
    )
}

export default Testimonials;