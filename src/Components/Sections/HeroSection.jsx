import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
function HeroSection() {
      const swiperRef = useRef(null);
      useEffect(() => {
        if (swiperRef.current) {
          const swiper = swiperRef.current.swiper;
          if (swiper) {
            swiper.params.navigation.prevEl = '.custom-prev';
            swiper.params.navigation.nextEl = '.custom-next';
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }
      }, []);
    const adSlides = [
        '/river_slide2.jpg',
        '/slide1.svg',
        '/green_slide3.jpg'
      ];
  return (
    <section id="hero-section" className="relative h-screen">
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      className="w-full h-full"
    >
      {adSlides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full">
            <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            {/* Dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Overlay Text - This will stay fixed while images slide */}
    <div className="absolute text-7xl max-md:text-6xl max-sm:text-5xl inset-0 flex flex-col font-black max-sm:font-bold items-center justify-center text-white z-10">
      <h1 className=" mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
        WE PROVIDE
      </h1>
      <h1 className="mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
        THE BEST
      </h1>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#006241] text-white px-8 py-3 rounded-full text-xl hover:bg-[#005236] transition-colors"
      >
        EXPLORE MORE
      </motion.button>
    </div>
  </section>
  )
}

export default HeroSection
