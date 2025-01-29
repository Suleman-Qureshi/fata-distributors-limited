import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import logo from '/fata_logo.svg'; // Make sure to add your FATA logo

function HomePage() {
  const [activePage, setActivePage] = useState('home');

  // Ad slider images - replace these paths with your public folder image paths
  const adSlides = [
    '/slide1.svg',
    '/slide2.svg',
    '/slide3.svg'
  ];

  // Updated featured products data
  const featuredProducts = [
    { 
      id: 1, 
      name: 'Name', 
      description: 'Description',
      image: '/featured-product-1.svg'
    },
    { 
      id: 2, 
      name: 'Name', 
      description: 'Description',
      image: '/featured-product-2.svg'
    },
    { 
      id: 3, 
      name: 'Name', 
      description: 'Description',
      image: '/featured-product-3.svg'
    }
  ];

  const handleNavClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="min-h-screen relative">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#006241]">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={logo} alt="FATA Logo" className="h-12" />
            </div>
            <div className="flex space-x-12">
              <a 
                href="#home" 
                onClick={() => handleNavClick('home')}
                className="text-white text-xl relative group"
              >
                Home
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-300 
                  ${activePage === 'home' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}>
                </span>
              </a>
              <a 
                href="#products" 
                onClick={() => handleNavClick('products')}
                className="text-white text-xl relative group"
              >
                products
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-300 
                  ${activePage === 'products' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}>
                </span>
              </a>
              <a 
                href="#recipes" 
                onClick={() => handleNavClick('recipes')}
                className="text-white text-xl relative group"
              >
                recipes
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-300 
                  ${activePage === 'recipes' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}>
                </span>
              </a>
              <a 
                href="#contact" 
                onClick={() => handleNavClick('contact')}
                className="text-white text-xl relative group"
              >
                contact us
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-300 
                  ${activePage === 'contact' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}>
                </span>
              </a>
              <a 
                href="#about" 
                onClick={() => handleNavClick('about')}
                className="text-white text-xl relative group"
              >
                about us
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-300 
                  ${activePage === 'about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}>
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Slider */}
      <section className="relative h-screen">
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
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
          <h1 className="text-7xl font-black mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            WE PROVIDE
          </h1>
          <h1 className="text-7xl font-black mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
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

      {/* Featured Products Section */}
      <section className="py-20 relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "url('/rice-bag-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6 relative z-10"
        >
          <h2 className="text-7xl font-bold text-center mb-16 text-[#006241]" 
              style={{ fontFamily: 'Playfair Display, serif' }}>
            FEATURED PRODUCTS
          </h2>

          <Swiper
            modules={[Navigation]}
            navigation={true}
            spaceBetween={50}
            slidesPerView={3}
            className="featured-products-slider"
          >
            {featuredProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-8 rounded-lg shadow-lg text-center"
                >
                  <div className="h-64 mb-6">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {product.description}
                  </p>
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
