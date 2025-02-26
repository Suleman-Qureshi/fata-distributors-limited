import React from "react";
import { motion } from "framer-motion";
function AboutSection() {
  return (
    <section
      id="about-section"
      className="relative w-screen min-h-screen max-md:pb-0 flex max-md:flex-col"
    >
      {/* Left side - Image */}
      <div className="w-full max-md:h-96 relative before:absolute before:w-full before:h-full before:bg-black before:bg-opacity-50">
 <img src="./about_img.svg" alt="" className="w-full h-full" />
      </div>
      <motion.div
      initial={{x:200}}
      whileInView={{x:0}}
      viewport={{once:true}}
      className="w-full flex flex-col justify-center items-center gap-12 text-center p-8 overflow-hidden">
        <h3 className="text-7xl font-bold text-[#006241] relative mt-4">
          <img
            src="/rice_beans.svg"
            alt="Rice decoration"
            className="absolute -top-7 -left-7 w-14 h-14 transform -rotate-45 "
          />

          <h2 className="text-[#006241] text-7xl font-bold text-center relative z-10">
            ABOUT US
          </h2>

          {/* Rice beans decoration right */}
          <img
            src="/rice_beans.svg"
            alt="Rice decoration"
            className=" absolute -top-8 -right-7 w-14 h-14 transform rotate-45"
          />
        </h3>
        <p className="text-xl text-slate-700">
          La Lune French Bistro was born from a love of all things Paris. Our
          founder and chef Ingrid Correa spent three amazing years in the City
          of Love, training under the industry's best. She brought home
          everything she learned - the flavors, the feelings, the family-style
          cafe - so that you can get a taste of Paris, too.
        </p>
        <button className="rounded-full bg-[#006241] text-white font-medium text-center px-6 py-2">EXPLORE MORE</button>
      </motion.div>
    </section>
  );
}
export default AboutSection;
