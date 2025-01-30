import React from "react";
import NavBar from "../Components/Navigation/NavBar";
import Sliders from "../Components/Sliders";
import Reactcarousel from "../Components/React-arousel/Reactcarousel";
import Recipes from "../Components/recipes";
function HomePage() {
  return (
    <>
      <NavBar />
      <section className=" w-screen h-screen relative">
        <Sliders />
        <div className=" flex-col absolute w-screen h-screen top-0 flex justify-center items-center text-center gap-10 bg-slate-50 bg-opacity-10 z-10">
          <h1 className="text-8xl font-bold text-black">
            We Provide <br />
            The Best
          </h1>
          <button className="px-6 py-1 bg-[#006a4d] text-white rounded-full ">
            Explore more
          </button>
        </div>
      </section>
      <section className="w-screen h-screen flex gap-12">
        <div className="w-full h-full">
          <img src="./about_img.svg" alt="" className="w-full h-full" />
        </div>
        <div className="w-full h-full flex-col flex items-center text-center justify-center p-12 gap-8">
          <h2 className="text-5xl font-bold text-[#006a4d]">ABOUT US</h2>
          <p className="px-4 text-black">
            La Lune French Bistro was born from a love of all things Paris. Our
            founder and chef Ingrid Correa spent three amazing years in the City
            of Love, training under the industry's best. She brought home
            everything she learned - the flavors, the feelings, the family-style
            cafe - so that you can get a taste of Paris, too.
          </p>
          <button className="px-4 py-2 bg-[#006a4d] font-semibold text-white">READ ABOUT US</button>
        </div>
      </section>
      <section className="w-screen h-screen flex flex-col items-center py-12 px-24">
      <h2 className="text-5xl font-bold text-[#006a4d]">FEATURE PRODUTCS</h2>
      <Reactcarousel/>
      </section>
      <section className="w-screen h-screen flex flex-col gap-8 text-white blendDarken px-12 py-24">
      <h2 className="text-5xl font-bold">RECIPE</h2>
      <Recipes/>
      </section>
    </>
  );
}
export default HomePage;
