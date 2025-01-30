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
          autoplay={{ delay: 2000 }}
          className="w-full h-screen"
        >
           <SwiperSlide>
              <img src='/slide1.svg' alt='slider_1' className="w-full h-full object-cover" />
            </SwiperSlide>
           <SwiperSlide>
              <img src='/slide3.svg' alt='slider_1' className="w-full h-full object-cover" />
            </SwiperSlide>
        </Swiper>
      </section>
  )
}

export default Sliders
