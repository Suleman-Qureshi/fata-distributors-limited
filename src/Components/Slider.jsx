import React from 'react'
import { TiSortAlphabeticallyOutline } from "react-icons/ti";
import { FaStar } from "react-icons/fa";

function Slider({
    imgSrc1="",
    imgSrc2="",
}) {
  return (
    <div id="carouselExampleIndicators" className="carousel slide w-screen h-screen py-4" data-bs-ride="carousel">
    <div className="carousel-indicators flex gap-12 -translate-y-52 -translate-x-40 max-2xl:-translate-y-32 max-2xl:-translate-x-48">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"><TiSortAlphabeticallyOutline className='w-12 h-12 flex justify-center items-center bg-white bg-opacity-50' /></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"><TiSortAlphabeticallyOutline className='w-12 h-12 flex justify-center items-center bg-white bg-opacity-50' /></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"><TiSortAlphabeticallyOutline className='w-12 h-12 flex justify-center items-center bg-white bg-opacity-50' /></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"><TiSortAlphabeticallyOutline className='w-12 h-12 flex justify-center items-center bg-white bg-opacity-50' /></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className='w-full h-screen text-white flex justify-center items-center px-24 py-12 gap-6 p-4'>
          <h1 className='text-end text-9xl max-2xl:text-7xl font-extrabold -translate-y-24 max-2xl:-translate-y-20'>BASMATI <br />RICE</h1>
          <div className='w-1/4 max-2xl:w-2/6 h-2/3 bg-gradient-to-r from-[#fffdfd91] to-transparent rounded-2xl relative'>
          <img src="./product-1.png" alt="" className='w-72 absolute right-0 -top-6 max-2xl:w-48' />
          <div className='absolute bottom-20 max-2xl:bottom-4 flex flex-col gap-2 p-6 w-2/3 max-2xl:w-4/5'>
            <h5 className='text-xl'>Composition Food</h5>
            <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, cum.</p>
            <div className='flex gap-2 items-center'>
              <div className='text-2xl font-semibold'>5.0</div>
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            </div>
          </div>
          <img src="./button.png" alt="" className='h-12 max-2xl:h-10 absolute bottom-6 -right-6' />
          </div>
        </div>
      </div>
      <div className="carousel-item">
      <div className='w-full h-screen text-white flex justify-center items-center px-24 py-12 gap-6 p-4'>
          <h1 className='text-end text-9xl max-2xl:text-7xl font-extrabold -translate-y-24 max-2xl:-translate-y-20'>BASMATI <br />RICE</h1>
          <div className='w-1/4 max-2xl:w-2/6 h-2/3 bg-gradient-to-r from-[#fffdfd91] to-transparent rounded-2xl relative'>
          <img src="./product-1.png" alt="" className='w-72 absolute right-0 -top-6 max-2xl:w-48' />
          <div className='absolute bottom-20 max-2xl:bottom-4 flex flex-col gap-2 p-6 w-2/3 max-2xl:w-4/5'>
            <h5 className='text-xl'>Composition Food</h5>
            <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, cum.</p>
            <div className='flex gap-2 items-center'>
              <div className='text-2xl font-semibold'>5.0</div>
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            </div>
          </div>
          <img src="./button.png" alt="" className='h-12 max-2xl:h-10 absolute bottom-6 -right-6' />
          </div>
        </div>
      </div>
      <div className="carousel-item">
      <div className='w-full h-screen text-white flex justify-center items-center px-24 py-12 gap-6 p-4'>
          <h1 className='text-end text-9xl max-2xl:text-7xl font-extrabold -translate-y-24 max-2xl:-translate-y-20'>BASMATI <br />RICE</h1>
          <div className='w-1/4 max-2xl:w-2/6 h-2/3 bg-gradient-to-r from-[#fffdfd91] to-transparent rounded-2xl relative'>
          <img src="./product-1.png" alt="" className='w-72 absolute right-0 -top-6 max-2xl:w-48' />
          <div className='absolute bottom-20 max-2xl:bottom-4 flex flex-col gap-2 p-6 w-2/3 max-2xl:w-4/5'>
            <h5 className='text-xl'>Composition Food</h5>
            <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, cum.</p>
            <div className='flex gap-2 items-center'>
              <div className='text-2xl font-semibold'>5.0</div>
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            </div>
          </div>
          <img src="./button.png" alt="" className='h-12 max-2xl:h-10 absolute bottom-6 -right-6' />
          </div>
        </div>
      </div>
      <div className="carousel-item">
      <div className='w-full h-screen text-white flex justify-center items-center px-24 py-12 gap-6 p-4'>
          <h1 className='text-end text-9xl max-2xl:text-7xl font-extrabold -translate-y-24 max-2xl:-translate-y-20'>BASMATI <br />RICE</h1>
          <div className='w-1/4 max-2xl:w-2/6 h-2/3 bg-gradient-to-r from-[#fffdfd91] to-transparent rounded-2xl relative'>
          <img src="./product-1.png" alt="" className='w-72 absolute right-0 -top-6 max-2xl:w-48' />
          <div className='absolute bottom-20 max-2xl:bottom-4 flex flex-col gap-2 p-6 w-2/3 max-2xl:w-4/5'>
            <h5 className='text-xl'>Composition Food</h5>
            <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, cum.</p>
            <div className='flex gap-2 items-center'>
              <div className='text-2xl font-semibold'>5.0</div>
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            </div>
          </div>
          <img src="./button.png" alt="" className='h-12 max-2xl:h-10 absolute bottom-6 -right-6' />
          </div>
        </div>
      </div>
    </div>
   
  </div>
  )
}

export default Slider
