import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
function ProductSection() {
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
      const featuredProducts = [
        { 
          id: 1, 
          name: 'Premium Rice', 
          description: 'High-quality basmati rice',
          image: '/featured-product-1.svg'
        },
        { 
          id: 2, 
          name: 'Spice Mix', 
          description: 'Traditional spice blend',
          image: '/featured-product-2.svg'
        },
        { 
          id: 3, 
          name: 'Cooking Oil', 
          description: 'Pure vegetable oil',
          image: '/featured-product-3.svg'
        },
        { 
          id: 4, 
          name: 'Lentils', 
          description: 'Organic red lentils',
          image: '/display_product.png'
        },
        { 
          id: 5, 
          name: 'Tea Leaves', 
          description: 'Premium black tea',
          image: '/display_product.png'
        }
      ];
  return (
    <section className="py-20 relative overflow-hidden bg-white">
        {/* Rice bag decoration */}
        <img 
          src="/rice_bag.svg" 
          alt="Rice bag" 
          className="absolute -left-20 top-0 h-60 z-0"
        />

        <div className="container mx-auto px-6 relative z-20">
          {/* Title with simple animation */}
          <motion.h2 
            initial={{ 
              x: -500,
              opacity: 0
            }}
            whileInView={{ 
              x: 0,
              opacity: 1
            }}
            transition={{ 
              duration: 1.0,
              ease: "easeOut"
            }}
            
            className="text-7xl font-bold text-center mb-16 text-[#006241]" 
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            FEATURED PRODUCTS
          </motion.h2>

          {/* Products Slider */}
          <div className="relative px-12">
            <Swiper
              ref={swiperRef}
              modules={[Navigation]}
              navigation={{
                prevEl: '.custom-prev',
                nextEl: '.custom-next',
              }}
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              className="featured-products-slider"
            >
              {featuredProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-6 rounded-lg shadow-lg text-center max-w-[280px] mx-auto"
                  >
                    <div className="h-40 w-40 mx-auto mb-4">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {product.description}
                    </p>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors border border-[#006241] cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#006241]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors border border-[#006241] cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#006241]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ProductSection
