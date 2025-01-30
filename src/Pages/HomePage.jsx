import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import logo from '/fata_logo.svg'; // Make sure to add your FATA logo
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function HomePage() {
  const [activePage, setActivePage] = useState('home');
  const [activeRecipe, setActiveRecipe] = useState('recipe1');

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '80%']);

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

  // Ad slider images - replace these paths with your public folder image paths
  const adSlides = [
    '/river_slide2.jpg',
    '/slide1.svg',
    '/green_slide3.jpg'
  ];


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

  const recipes = [
    {
      id: 'recipe1',
      name: 'Chicken Biryani',
      description: 'A flavorful combination of rice, tender chicken, and aromatic spices layered and cooked to perfection.',
      image: '/Picture28.svg'
    },
    {
      id: 'recipe2',
      name: 'Butter Chicken',
      description: 'Tender chicken pieces in a rich, creamy tomato-based curry with butter and aromatic spices.',
      image: '/Picture28.svg'
    },
    {
      id: 'recipe3',
      name: 'Palak Paneer',
      description: 'Fresh spinach pureed and cooked with Indian cottage cheese and spices.',
      image: '/Picture28.svg'
    },
    {
      id: 'recipe4',
      name: 'Dal Makhani',
      description: 'Creamy black lentils slow-cooked with butter and spices.',
      image: '/Picture28.svg'
    },
    {
      id: 'recipe5',
      name: 'Naan Bread',
      description: 'Traditional Indian bread baked in a tandoor, perfect for scooping up curries.',
      image: '/Picture28.svg'
    }
  ];

  const handleNavClick = (page) => {
    setActivePage(page);
  };

  const handleRecipeClick = (recipeId) => {
    setActiveRecipe(recipeId);
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
              <div className="relative group">
                <img 
                  src="/rice_beans.svg" 
                  alt="Rice decoration" 
                  className={`absolute -top-4 -left-4 w-6 h-6 transform rotate-45 transition-opacity duration-300
                    ${activePage === 'home' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                />
                <a 
                  href="#home" 
                  onClick={() => handleNavClick('home')}
                  className="text-white text-xl relative"
                >
                  Home
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-300 
                    ${activePage === 'home' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}>
                  </span>
                </a>
              </div>

              <div className="relative group">
                <img 
                  src="/rice_beans.svg" 
                  alt="Rice decoration" 
                  className={`absolute -top-4 -left-4 w-6 h-6 transform rotate-45 transition-opacity duration-300
                    ${activePage === 'products' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                />
                <a 
                  href="#products" 
                  onClick={() => handleNavClick('products')}
                  className="text-white text-xl relative"
                >
                  products
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-300 
                    ${activePage === 'products' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}>
                  </span>
                </a>
              </div>

              <div className="relative group">
                <img 
                  src="/rice_beans.svg" 
                  alt="Rice decoration" 
                  className={`absolute -top-4 -left-4 w-6 h-6 transform rotate-45 transition-opacity duration-300
                    ${activePage === 'recipes' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                />
                <a 
                  href="#recipes" 
                  onClick={() => handleNavClick('recipes')}
                  className="text-white text-xl relative"
                >
                  recipes
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-300 
                    ${activePage === 'recipes' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}>
                  </span>
                </a>
              </div>

              <div className="relative group">
                <img 
                  src="/rice_beans.svg" 
                  alt="Rice decoration" 
                  className={`absolute -top-4 -left-4 w-6 h-6 transform rotate-45 transition-opacity duration-300
                    ${activePage === 'contact' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                />
                <a 
                  href="#contact" 
                  onClick={() => handleNavClick('contact')}
                  className="text-white text-xl relative"
                >
                  contact us
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-300 
                    ${activePage === 'contact' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}>
                  </span>
                </a>
              </div>

              <div className="relative group">
                <img 
                  src="/rice_beans.svg" 
                  alt="Rice decoration" 
                  className={`absolute -top-4 -left-4 w-6 h-6 transform rotate-45 transition-opacity duration-300
                    ${activePage === 'about' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                />
                <a 
                  href="#about" 
                  onClick={() => handleNavClick('about')}
                  className="text-white text-xl relative"
                >
                  about us
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-300 
                    ${activePage === 'about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}>
                  </span>
                </a>
              </div>
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

      {/* Recipes Section */}
      <section className="relative min-h-screen bg-black">
        {/* Background Container with Parallax */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute inset-0 z-0"
            style={{ y }}
          >
            <img 
              src="/slide3.svg" 
              alt="Background" 
              className="w-full h-[120%] object-cover object-center transform -translate-y-1/4 inset-0 opacity-50"
            />
          </motion.div>
        </div>

        {/* Content Container */}
        <div className="relative z-30 h-full">
          <div className="container mx-auto px-6 pt-32">
            {/* Title */}
            <h1 className="text-white text-8xl font-bold relative mb-16">
              RECIPES
            </h1>

            {/* Content Grid */}
            <div className="grid grid-cols-2 gap-0">
              {/* Left Side - Recipe Names */}
              <div className="flex flex-col space-y-4 border-r-4 border-[#006241]">
                {recipes.map((recipe) => (
                  <div 
                    key={recipe.id}
                    className={`p-4 cursor-pointer ${
                      activeRecipe === recipe.id 
                        ? 'bg-[#006241]' 
                        : 'hover:bg-[#006241] transition-colors'
                    }`}
                    onClick={() => handleRecipeClick(recipe.id)}
                  >
                    <h3 className="text-white text-xl">{recipe.name}</h3>
                  </div>
                ))}
              </div>

              {/* Right Side - Recipe Details */}
              <div className="flex flex-col relative min-h-[400px] pl-12">
                <div className="mb-8">
                  <h2 className="text-white text-2xl mb-4">DESCRIPTION:</h2>
                  <p className="text-white">
                    {recipes.find(r => r.id === activeRecipe)?.description}
                  </p>
                </div>

                {/* Recipe Image - Positioned bottom right */}
                <div className="absolute bottom-0 right-0 w-[300px]">
                  <img 
                    src={recipes.find(r => r.id === activeRecipe)?.image} 
                    alt={recipes.find(r => r.id === activeRecipe)?.name}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative">
        <div className="grid grid-cols-2 gap-0">
          {/* Left side - Image */}
          <div className="h-[600px]">
            <img 
              src="/about_img.svg" 
              alt="Farmers in field" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Right side - Content */}
          <div className="bg-white p-16 flex flex-col justify-center relative overflow-hidden">
            <div className="relative mb-12">
              <div className="flex items-center justify-center relative">
                {/* Rice beans decoration left */}
                <img 
                  src="/rice_beans.svg" 
                  alt="Rice decoration" 
                  className=" top-1/2 -translate-y-1/2 w-14 h-14 transform -rotate-45"
                />
                
                <h2 className="text-[#006241] text-7xl font-bold text-center relative z-10">
                  ABOUT US
                </h2>
                
                {/* Rice beans decoration right */}
                <img 
                  src="/rice_beans.svg" 
                  alt="Rice decoration" 
                  className=" top-1/2 -translate-y-1/2 w-14 h-14 transform rotate-45"
                />
              </div>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <p className="text-center text-xl leading-relaxed mb-8">
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
            </div>

            {/* Wheat/Rice crop decoration in bottom right */}
            <img 
              src="/sitta.svg" 
              alt="Wheat decoration" 
              className="absolute -right-40 top-50 h-full w-auto object-contain z-0"
            />
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20 relative bg-[#f5f5f0] overflow-hidden">
        {/* Decorative elements */}
        <img 
          src="/rice_crop.svg" 
          alt="Wheat decoration" 
          className="absolute -left-40 top-50 h-full w-auto object-contain z-0"
        />

        {/* Rice bag decoration top right */}
        <img 
          src="/rice_bag_right.svg" 
          alt="Rice bag" 
          className="absolute top-0 -right-20 h-60 z-0"
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 gap-20">
            {/* Left side - Contact Form */}
            <div>
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
            </div>

            {/* Right side - Contact Information */}
            <div className="pt-10">
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
            </div>
          </div>
        </div>
      </section>

      

      {/* Footer */}
      <footer className="bg-[#006241] text-white py-6">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-start">
            {/* Left Section */}
            <div className="flex">
              <span className="mr-4">Learn more</span>
              <div className="flex">
                <div className="border-l-2 border-white h-full mx-4"></div>
                <div className="flex flex-col space-y-2">
                  <a href="#terms" className="hover:underline">Terms & onditions</a>
                  <a href="#privacy" className="hover:underline">Privacy Policy</a>
                  <a href="#contact" className="hover:underline">Contact Us</a>
                </div>
              </div>
            </div>

            {/* Center Section - Logo */}
            <div className="flex flex-col items-center">
              <img 
                src={logo} 
                alt="FATA Logo" 
                className="h-16 mb-2"
              />
              <p className="text-sm">We Provide the best</p>
            </div>

            {/* Right Section - Address */}
            <div className="flex">
              <div className="border-l-2 border-white h-full mx-4"></div>
              <div className="flex">
                <span className="mr-4">Address</span>
                <div className="flex">
                  <div className="border-l-2 border-white h-full mx-4"></div>
                  <div className="flex flex-col">
                    <p>xyz batley, track Road</p>
                    <p>123 citry xyz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
