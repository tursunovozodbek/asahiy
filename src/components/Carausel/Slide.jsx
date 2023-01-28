import React from 'react'
import './Slide.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper';

export default function Slide() {
  return (
    <>
      <div className='slide-swiper-center'>
          
          <Swiper
          watchSlidesProgress={true} 
          slidesPerView={8} className=""
          autoplay={{
            delay: 2500, 
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}>
              <SwiperSlide><div className='card-image'> <img className='rasm' src="https://assets.asaxiy.uz/brand/webp//603481675b122.webp"/></div></SwiperSlide>
              <SwiperSlide><div className='card-image'> <img className='rasm' src="https://assets.asaxiy.uz/brand/webp//5ff6f8872a0db.webp"/></div></SwiperSlide>
              <SwiperSlide><div className='card-image'> <img className='rasm' src="https://assets.asaxiy.uz/brand/webp//6013a8b3bc61c.webp"/></div></SwiperSlide>
              <SwiperSlide><div className='card-image'> <img className='rasm' src="https://assets.asaxiy.uz/brand/webp//5e15c4ec85cf2.webp"/></div></SwiperSlide>
              <SwiperSlide><div className='card-image'> <img className='rasm' style={{height: '100px'}} src="https://assets.asaxiy.uz/brand/webp//5e15c63e06b95.webp"/></div></SwiperSlide>
              <SwiperSlide><div className='card-image'> <img  className='rasm' src="https://assets.asaxiy.uz/brand/webp//6103c3977d54d.webp"/></div></SwiperSlide>
              <SwiperSlide><div className='card-image'> <img className='rasm' src="https://assets.asaxiy.uz/brand/webp//6014fbfea491a.webp"/></div></SwiperSlide>
              <SwiperSlide><div className='card-image'> <img className='rasm' src="https://assets.asaxiy.uz/brand/webp//605036814c07e.webp"/></div></SwiperSlide>
              <SwiperSlide><div className='card-image'> <img className='rasm' src="https://assets.asaxiy.uz/brand/webp//5e15c5de44b63.webp"/></div></SwiperSlide>
              <SwiperSlide><div className='card-image'> <img className='rasm' src="https://assets.asaxiy.uz/brand/webp//5e15c4697e437.webp"/></div></SwiperSlide>
              <SwiperSlide><div className='card-image'> <img className='rasm' src="https://assets.asaxiy.uz/brand/webp//5e15c561deadb.webp"/></div></SwiperSlide>
          </Swiper>

      </div>
      
      <div className='download-container'>

          <img className='download-image' src="https://asaxiy.uz/custom-assets/images/asaxiy-app.png" alt="" />
          <div className="download">
            <img  src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo-white.svg" alt="logo" />
            <p>Sizning internet do'koningiz</p>
            <div className="btn-group">
                <img src="https://asaxiy.uz/custom-assets/images/app-store.svg" alt="AppStore" />
                <img src="https://asaxiy.uz/custom-assets/images/google-play.svg" alt="Googleplay" />
            </div>

          </div>

      </div>
    </>
  )
}
