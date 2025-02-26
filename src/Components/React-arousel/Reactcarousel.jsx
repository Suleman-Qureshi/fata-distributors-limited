import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactSlickpreviousButton from '../Buttons/ReactSlickpreviousButton';
import ReactSlicknextButton from '../Buttons/ReactSlicknextButton';
// import { FEATURED_CARDS } from '../../constant';
function Reactcarousel() {
const FEATURED_CARDS=[
  {id:1,description:"description",img:"./product-1.png",name:"name"},
  {id:2,description:"description",img:"./product-1.png",name:"name"},
  {id:3,description:"description",img:"./product-1.png",name:"name"},
  {id:4,description:"description",img:"./product-1.png",name:"name"},
]
    const settings1 = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0",
      slidesToShow: 3,
      speed: 500,
      nextArrow: <ReactSlicknextButton/>,
    prevArrow: <ReactSlickpreviousButton/>,
      };
    const settings2 = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0",
      slidesToShow: 1,
      speed: 500,
      nextArrow: <ReactSlicknextButton/>,
    prevArrow: <ReactSlickpreviousButton/>,
      };
  return (
    <>
    <div className='max-lg:hidden block relative'>
     <Slider {...settings1} className='w-full flex justify-center items-center px-24 max-xl:px-0'>
      {FEATURED_CARDS.map((cardItem,index)=>
      <div className='w-52 max-2xl:w-60 max-xl:w-72 px-12 ' key={cardItem.id}>
       <div className='relative w-full p-2  h-full bg-slate-500 bg-opacity-30 text-black rounded-xl flex flex-col gap-4 items-center justify-end  shadow-[#006a4d] overflow-hidden'>
        <div className='overflow-hidden w-full h-2/3 flex justify-center items-center'>
        <img src={cardItem.img} alt="" className='h-full' />
        </div>
        <div className='w-full flex justify-center'>{cardItem.description}</div>
        <div className='px-4 text-center py-2 text-xl font-semibold bg-[#006a4d] text-white rounded-xl'>{cardItem.name+index}</div>
       </div>
      </div>)}
  </Slider>
        </div>
  <div className='hidden max-lg:flex w-full justify-center items-center h-[70vh] relative'>
     <Slider {...settings2} className='w-screen h-full flex justify-center items-center px-24 max-md:px-12 max-sm:px-0 '>
      {FEATURED_CARDS.map((cardItem,index)=>
      <div className='w-52 h-96 px-12 ' key={cardItem.id}>
       <div className='relative w-full p-2 pb-0 h-full bg-slate-500 bg-opacity-30 text-black rounded-xl flex flex-col gap-4 items-center justify-end   shadow-[#006a4d] overflow-hidden'>
        <div className='overflow-hidden w-full h-2/3 flex justify-center items-center'>
        <img src={cardItem.img} alt="" className='h-full' />
        </div>
        <div className='w-full flex justify-center'>{cardItem.description}</div>
        <div className='w-full text-center py-2 text-xl font-semibold bg-[#006a4d] text-white rounded-t-xl'>{cardItem.name+index}</div>
       </div>
      </div>)}
  </Slider>
  </div>
    </>
  )
}

export default Reactcarousel
