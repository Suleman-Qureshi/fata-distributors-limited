import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import NavBar from '../Components/Navigation/NavBar';
import ProductSection from '../Components/Sections/ProductSection';
import RecipeSection from '../Components/Sections/RecipeSection';
import AboutSection from '../Components/Sections/AboutSection';
import ContactSection from '../Components/Sections/ContactSection';
import Footer from '../Components/Footer';
import HeroSection from '../Components/Sections/HeroSection';
import MyCarousel from '../Components/React-arousel/MyCarousel';

function HomePage() {
  return (
    <div className="min-h-screen w-screen overflow-hidden relative">
      <NavBar/>
      <HeroSection/>
      <ProductSection/>
      <RecipeSection/>
      <AboutSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default HomePage;
