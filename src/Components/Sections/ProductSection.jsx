import React, { useEffect, useRef } from 'react'
import { motion} from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import Reactcarousel from '../React-arousel/Reactcarousel';
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

  return (
    <section className="p-20 max-md:p-10 max-sm:p-2 relative overflow-hidden w-screen min-h-screen bg-white">
        {/* Rice bag decoration */}
        <img 
          src="/rice_bag.svg" 
          alt="Rice bag" 
          className="absolute -left-20 top-0 h-60 z-0"
        />

        <div className="container mx-auto relative z-20">
          {/* Title with simple animation */}
          <motion.h2 
              initial={{y:20}}
              whileInView={{y:0}}
              transition={{type:'spring'}}
              viewport={{once:true, amount:0.5}}
            className="text-7xl max-sm:text-5xl font-bold text-center mb-16 text-[#006241]" 
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            FEATURED PRODUCTS
          </motion.h2>
<Reactcarousel/>
        </div>
      </section>
  )
}

export default ProductSection
