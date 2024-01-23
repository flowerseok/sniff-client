'use client';
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
interface SliderProps {
  slides: React.ReactNode[];
}

const Slider = ({ slides }: SliderProps) => {
  return (
    <div>
      <div></div>
      <div className="slider-container">
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{
            type: 'progressbar',
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} matching-custom-progress"></span>`;
            },
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="h-screen w-full matching-slider"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>{slide}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
