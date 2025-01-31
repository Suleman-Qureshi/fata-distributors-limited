import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';

function About() {
  return (
    <section id="about-section" className="relative">
      <div className="flex">
        <div className="w-1/2 h-[600px]">
          <img 
            src="/about_img.svg" 
            alt="Farmers in field" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        
        <div className="w-1/2 bg-white p-16 flex flex-col justify-center relative overflow-hidden">
          <SectionTitle 
            title="ABOUT US"
            decorationLeft="/rice_beans.svg"
            decorationRight="/rice_beans.svg"
          />

          <motion.div 
            initial={{ x: 500, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false }}
            className="relative z-10 max-w-2xl mx-auto"
          >
            <p className="text-center text-xl leading-relaxed mb-8">
              La Lune French Bistro was born from a love of all things Paris...
            </p>

            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#006241] text-white px-8 py-3 rounded-full text-xl hover:bg-[#005236] transition-colors"
              >
                EXPLORE MORE
              </motion.button>
            </div>
          </motion.div>

          <img 
            src="/sitta.svg" 
            alt="Wheat decoration" 
            className="absolute -right-40 top-50 h-full w-auto object-contain z-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default About; 