import React from 'react'
import { motion} from 'framer-motion';
function AboutSection() {
  return (
    <section id="about-section" className="relative z-10 w-screen min-h-screen">
        <div className="flex max-md:flex-col gap-0 w-full">
          {/* Left side - Image */}
          <div className="w-full max-md:h-96">
            <img 
              src="/about_img.svg" 
              alt="Farmers in field" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Right side - Content */}
          <div className="bg-white p-4 flex flex-col justify-center items-center relative w-full">
            <div className="relative mb-12">
              <motion.div 
                initial={{ 
                  x: 500,
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
                viewport={{ once: true }}
                className="flex items-center justify-center relative"
              >
                {/* Rice beans decoration left */}
                <img 
                  src="/rice_beans.svg" 
                  alt="Rice decoration" 
                  className="top-1/2 -translate-y-1/2 w-14 h-14 transform -rotate-45"
                />
                
                <h2 className="text-[#006241] text-7xl font-bold text-center relative z-10">
                  ABOUT US
                </h2>
                
                {/* Rice beans decoration right */}
                <img 
                  src="/rice_beans.svg" 
                  alt="Rice decoration" 
                  className="top-1/2 -translate-y-1/2 w-14 h-14 transform rotate-45"
                />
              </motion.div>
            </div>

            <motion.div 
              initial={{ 
                x: 500,
                opacity: 0
              }}
              whileInView={{ 
                x: 0,
                opacity: 1
              }}
              transition={{ 
                duration: 1.0,
                ease: "easeOut",
                delay: 0.2
              }}
              viewport={{ once: true }}
              className="relative z-10 max-w-2xl mx-auto"
            >
              <p className=" text-center text-lg mb-8">
                La Lune French Bistro was born from a love of all things Paris. Our founder and chef Ingrid Correa spent three amazing years in the City of Love, training under the industry's best. She brought home everything she learned - the flavors, the feelings, the family-style cafe - so that you can get a taste of Paris, too.
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

            {/* Wheat/Rice crop decoration in bottom right */}
            <img 
          src="/rice_bag_right.svg" 
          alt="Rice bag" 
          className="absolute -bottom-32 -right-20 h-60 z-0"
        />
          </div>
        </div>
      </section>
  )
}

export default AboutSection
