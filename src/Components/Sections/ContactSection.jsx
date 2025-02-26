import React from 'react'
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
function ContactSection() {
  return (
    <section id="contact-section" className="py-20 relative w-screen z-0 overflow-hidden">
        {/* Decorative elements */}
        <img 
          src="/rice_crop.svg" 
          alt="Wheat decoration" 
          className="absolute -left-40 top-50 h-full w-auto object-contain z-0"
        />
       
        
        <div className="container  px-6 relative z-10">
          <div className="flex max-md:flex-col-reverse gap-9">
            {/* Left side - Contact Form */}
            <motion.div
             initial={{x:-200,opacity:0}}
             whileInView={{x:0,opacity:1}}
             transition={{type:"spring"}}
             viewport={{once:true,amount:0.2}}
             className='w-full'
            >
              <form className="flex flex-col gap-4 w-full">
                <div>
                  <label className="text-xl mb-2 block">Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#006241]" 
                  />
                </div>

                <div className="flex max-md:flex-col gap-4 w-full">
                  <div className='w-full'>
                    <label className="text-xl mb-2 block">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#006241]" 
                    />
                  </div>
                  <div className='w-full'>
                    <label className="text-xl mb-2 block">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#006241]" 
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xl mb-2 block">Message</label>
                  <textarea 
                    rows="6" 
                    className="w-full p-3 rounded-md border bg-transparent border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#006241]"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="bg-[#006241] text-white px-12 py-3 rounded-md text-xl hover:bg-[#005236] transition-colors"
                >
                  Submit
                </button>
              </form>
            </motion.div>

            {/* Right side - Contact Information */}
            <div 
              className="p-2 flex flex-col gap-4 w-full"
            >
              <motion.h2 initial={{y:20}} whileInView={{y:0}} viewport={{once:true}} className="text-[#006241] text-7xl max-sm:text-5xl font-bold">
                Contact Us
              </motion.h2>
              
              <motion.p initial={{y:20}} whileInView={{y:0}} viewport={{once:true}} className="text-xl max-w-md">
                For questions, technical assistance, or collaboration opportunities via the contact information provided.
              </motion.p>

              <div className="flex flex-col gap-4">
                <motion.div initial={{y:20}} whileInView={{y:0}} viewport={{once:true}} className="flex items-center gap-2">
                  <div className="bg-black rounded-full p-3">
                    <FaPhone className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl">+123-456-7890</span>
                </motion.div>

                <motion.div initial={{y:20}} whileInView={{y:0}} viewport={{once:true}} className="flex items-center gap-2">
                  <div className="bg-black rounded-full p-3">
                    <FaEnvelope className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl">example@xyz.com</span>
                </motion.div>

                <motion.div initial={{y:20}} whileInView={{y:0}} viewport={{once:true}} className="flex items-center gap-2 max-sm:gap-2">
                  <div className="bg-black rounded-full p-3">
                    <FaMapMarkerAlt className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl">123 Anywhere St., Any City, ST 12345</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ContactSection
