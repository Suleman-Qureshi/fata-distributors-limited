import React from 'react'
import Slider from '../Components/Slider';
function HomePage() {
  return (
    <>
    <section className='w-screen h-screen bg-[url("herobgHome.gif")] bg-cover bg-no-repeat bg-top relative before:absolute before:w-full before:h-full bg-red-600'>
      {/* <div className='h-screen flex justify-end mr-12'>
      <img src="./png 3.png" alt="" className='h-full' />
      </div> */}
   <Slider imgSrc1='https://images.unsplash.com/photo-1736644772468-aacc3d6bde24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D' imgSrc2='https://images.unsplash.com/photo-1736606355698-5efdb410fe93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D' />
    </section>
    </>
  )
}
export default HomePage
