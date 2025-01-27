import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function HomePage() {
  // Ad slider images - replace these paths with your public folder image paths
  const adSlides = [
    '/slide1.svg',
    '/slide2.svg',
    '/slide3.svg'
  ];

  // Featured products - replace image paths with your product images
  const featuredProducts = [
    { id: 1, name: 'Product 1', image: '/product-1.png' },
    // { id: 2, name: 'Product 2', image: '/product2.jpg', price: '$149' },
    // { id: 3, name: 'Product 3', image: '/product3.jpg', price: '$199' },
    // { id: 4, name: 'Product 4', image: '/product4.jpg', price: '$299' },
  ];

  return (
    <div className="min-h-screen">
      {/* Ad Slider Section */}
      <section className="pt-20">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          className="w-full h-[600px]"
        >
          {adSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide} alt={`Ad ${index + 1}`} className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <Swiper
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="px-4"
          >
            {featuredProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-4 rounded-lg shadow-md"
                >
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
                  <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
                  <p className="text-blue-600 font-bold">{product.price}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </section>

      {/* About Us Section */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6"
        >
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/about-image.jpg" alt="About Us" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400" 
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400" 
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  rows="4" 
                  className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors w-full"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-400">Your company description goes here.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Products</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@example.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Address: 123 Street Name, City</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
