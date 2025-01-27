import React from 'react'
import NavBar from '../Components/Navigation/NavBar';
import Sliders from '../Components/Sliders';
function HomePage() {
  return (
    <>
    <NavBar/>
    <section className=' w-screen h-screen relative'>
      <Sliders/>
      <div className=' flex-col absolute w-screen h-screen top-0 flex justify-center items-center text-center gap-10 bg-slate-50 bg-opacity-10 z-10'>
        <h1 className='text-8xl font-bold text-black'>We Provide <br />The Best</h1>
        <button className='px-6 py-1 bg-[#006a4d] text-white rounded-full '>Explore more</button>
      </div>
    </section>
    </>
  )
}
export default HomePage
