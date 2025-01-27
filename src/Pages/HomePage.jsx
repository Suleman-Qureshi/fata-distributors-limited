import React from 'react'
import NavBar from '../Components/Navigation/NavBar';
import Sliders from '../Components/Sliders';
function HomePage() {
  const adSlides = [
    '/slide1.svg',
    '/slide2.svg',
    '/slide3.svg'
  ];

  const featuredProducts = [
    { id: 1, name: 'Product 1', image: 'https://picsum.photos/300/300', price: '$99' },
    { id: 2, name: 'Product 2', image: 'https://picsum.photos/300/301', price: '$149' },
    { id: 3, name: 'Product 3', image: 'https://picsum.photos/300/302', price: '$199' },
    { id: 4, name: 'Product 4', image: 'https://picsum.photos/300/303', price: '$299' },
  ];

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

export default HomePage;
