import React from 'react'
import { TiSortAlphabeticallyOutline } from "react-icons/ti";

function Slider({
    imgSrc1="",
    imgSrc2="",
}) {
  return (
    <div id="carouselExampleIndicators" className="carousel slide w-screen h-screen" data-bs-ride="carousel">
    <div className="carousel-indicators flex gap-8 -translate-y-12">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"><TiSortAlphabeticallyOutline className='w-12 h-12 flex justify-center items-center bg-white bg-opacity-50' /></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"><TiSortAlphabeticallyOutline className='w-12 h-12 flex justify-center items-center bg-white bg-opacity-50' /></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"><TiSortAlphabeticallyOutline className='w-12 h-12 flex justify-center items-center bg-white bg-opacity-50' /></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"><TiSortAlphabeticallyOutline className='w-12 h-12 flex justify-center items-center bg-white bg-opacity-50' /></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className='w-full h-screen text-white flex justify-center items-center'>
            <img src={imgSrc1} alt="" />
        </div>
      </div>
      <div className="carousel-item">
      <div className='w-full h-screen text-white flex justify-center items-center'>
            <img src={imgSrc2} alt="" />
        </div>
      </div>
      <div className="carousel-item">
      <div className='w-full h-screen bg-red-500 text-white flex justify-center items-center'>img3</div>
      </div>
      <div className="carousel-item">
      <div className='w-full h-screen bg-blue-500 text-white flex justify-center items-center'>img3</div>
      </div>
    </div>
   
  </div>
  )
}

export default Slider
