// import React from 'react';
// import { motion } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// function HomePageMoiz() {
//   const adSlides = [
//     'https://picsum.photos/1920/800',
//     'https://picsum.photos/1920/801',
//     'https://picsum.photos/1920/802',
//   ];

//   const featuredProducts = [
//     { id: 1, name: 'Product 1', image: 'https://picsum.photos/300/300', price: '$99' },
//     { id: 2, name: 'Product 2', image: 'https://picsum.photos/300/301', price: '$149' },
//     { id: 3, name: 'Product 3', image: 'https://picsum.photos/300/302', price: '$199' },
//     { id: 4, name: 'Product 4', image: 'https://picsum.photos/300/303', price: '$299' },
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Header */}

//       {/* Ad Slider Section */}
//       <section id="home" className="pt-20">
//         <Swiper
//           modules={[Autoplay]}
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 3000 }}
//           className="w-full h-[600px]"
//         >
//           {adSlides.map((slide, index) => (
//             <SwiperSlide key={index}>
//               <img src={slide} alt={`Ad ${index + 1}`} className="w-full h-full object-cover" />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>

//       {/* Featured Products Section */}
//       <section id="products" className="py-20 bg-gray-50">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="container mx-auto px-6"
//         >
//           <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
//           <Swiper
//             modules={[Navigation]}
//             navigation
//             breakpoints={{
//               640: { slidesPerView: 2, spaceBetween: 20 },
//               768: { slidesPerView: 3, spaceBetween: 30 },
//               1024: { slidesPerView: 4, spaceBetween: 40 },
//             }}
//           >
//             {featuredProducts.map((product) => (
//               <SwiperSlide key={product.id}>
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   className="bg-white p-4 rounded-lg shadow-md"
//                 >
//                   <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
//                   <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
//                   <p className="text-blue-600 font-bold">{product.price}</p>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </motion.div>
//       </section>

//       {/* About Us Section */}
//       <section id="about" className="py-20">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="container mx-auto px-6"
//         >
//           <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <img src="https://picsum.photos/600/400" alt="About Us" className="rounded-lg shadow-lg" />
//             </div>
//             <div>
//               <p className="text-gray-600 leading-relaxed">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* Contact Us Section */}
//       <section id="contact" className="py-20 bg-gray-50">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="container mx-auto px-6"
//         >
//           <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
//           <div className="max-w-2xl mx-auto">
//             <form className="space-y-6">
//               <div>
//                 <input type="text" placeholder="Your Name" className="w-full p-3 rounded-md border" />
//               </div>
//               <div>
//                 <input type="email" placeholder="Your Email" className="w-full p-3 rounded-md border" />
//               </div>
//               <div>
//                 <textarea placeholder="Your Message" rows="4" className="w-full p-3 rounded-md border"></textarea>
//               </div>
//               <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </motion.div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-12">
//         <div className="container mx-auto px-6">
//           <div className="grid md:grid-cols-3 gap-12">
//             <div>
//               <h3 className="text-xl font-bold mb-4">About Us</h3>
//               <p className="text-gray-400">Short description about your company goes here.</p>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold mb-4">Quick Links</h3>
//               <ul className="space-y-2 text-gray-400">
//                 <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
//                 <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
//                 <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
//                 <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold mb-4">Contact Info</h3>
//               <ul className="space-y-2 text-gray-400">
//                 <li>Email: info@example.com</li>
//                 <li>Phone: (123) 456-7890</li>
//                 <li>Address: 123 Street Name, City, Country</li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
//             <p>&copy; 2024 Your Company Name. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default HomePageMoiz;
