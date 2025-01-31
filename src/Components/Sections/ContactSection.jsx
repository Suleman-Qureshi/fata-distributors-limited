import React from 'react'
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
function ContactSection() {
  return (
    <section id="contact-section" className="py-20 relative bg-[#f5f5f0] overflow-hidden">
        {/* Decorative elements */}
        <img 
          src="/rice_crop.svg" 
          alt="Wheat decoration" 
          className="absolute -left-40 top-50 h-full w-auto object-contain z-0"
        />
        <img 
          src="/rice_bag_right.svg" 
          alt="Rice bag" 
          className="absolute top-0 -right-20 h-60 z-0"
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 gap-20">
            {/* Left side - Contact Form */}
            <motion.div
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
              viewport={{ once: false }}
            >
              <form className="space-y-6">
                <div>
                  <label className="text-xl mb-2 block">Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#006241]" 
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xl mb-2 block">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#006241]" 
                    />
                  </div>
                  <div>
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
                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#006241]"
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
              viewport={{ once: false }}
              className="pt-10"
            >
              <h2 className="text-[#006241] text-7xl font-bold mb-8">
                Contact Us
              </h2>
              
              <p className="text-xl mb-12 max-w-md">
                For questions, technical assistance, or collaboration opportunities via the contact information provided.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-black rounded-full p-3">
                    <FaPhone className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl">+123-456-7890</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-black rounded-full p-3">
                    <FaEnvelope className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl">hello@reallygreatsite.com</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-black rounded-full p-3">
                    <FaMapMarkerAlt className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl">123 Anywhere St., Any City, ST 12345</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  )
}

export default ContactSection
