import React from 'react';
import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';
import {Pagination} from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import { themeContext } from "../../Context";
import { useContext } from "react";


const Testimonials = () => {
  
  const clients=[
    {
      img: profilePic1,
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit in molestias eveniet repellat atque veritatis sint fugiat aspernatur, eum molestiae."
    },
    {
      img: profilePic2,
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit in molestias eveniet repellat atque veritatis sint fugiat aspernatur, eum molestiae."
    },
    {
      img: profilePic3,
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit in molestias eveniet repellat atque veritatis sint fugiat aspernatur, eum molestiae."
    },
    {
      img: profilePic4,
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit in molestias eveniet repellat atque veritatis sint fugiat aspernatur, eum molestiae."
    }
  ]

  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="t-wrapper" id='Testimonials'>
      <div className="t-heading">
        <span>Clients always get</span>
        <span> Exceptional work </span>
        <span>From me...</span>
        <div className="blur t-blur1" style={{background:"var(--purple)"}}></div>
        <div className="blur t-blur2" style={{background:"skyblur"}}></div>
      </div>
      {/* Slider */}
      <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{clickable: true}}
      >
        {clients.map((client, index)=>{
          return(
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span style={{color: darkMode? 'white' : ''}}>{client.review}</span>
              </div>
            </SwiperSlide>
          )
        })}


      </Swiper>
    </div>
  )
}

export default Testimonials