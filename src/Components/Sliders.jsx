import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
function Sliders() {
  const adSlides = [
    'https://picsum.photos/1920/800',
    'https://picsum.photos/1920/801',
    'https://picsum.photos/1920/802',
  ];
  return (
      <section id="home">
        <Swiper
          modules={[Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="w-full h-[600px]"
        >
           <SwiperSlide>
              <img src='./home_slider_1.svg' alt='slider_1' className="w-full h-full object-cover" />
            </SwiperSlide>
           <SwiperSlide>
              <img src='./home_slider_2.avif' alt='slider_1' className="w-full h-full object-cover" />
            </SwiperSlide>
        </Swiper>
      </section>
  )
}

export default Sliders
