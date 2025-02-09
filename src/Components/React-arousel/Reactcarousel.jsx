import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactSlickpreviousButton from '../Buttons/ReactSlickpreviousButton';
import ReactSlicknextButton from '../Buttons/ReactSlicknextButton';
// import { FEATURED_CARDS } from '../../constant';
function Reactcarousel() {
const FEATURED_CARDS=[
  {id:1,description:"description",img:"",name:"name"},
  {id:2,description:"description",img:"",name:"name"},
  {id:3,description:"description",img:"",name:"name"},
  {id:4,description:"description",img:"",name:"name"},
]
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0",
      slidesToShow: 3,
      speed: 500,
      nextArrow: <ReactSlicknextButton/>,
    prevArrow: <ReactSlickpreviousButton/>,
      };
  return (
     <Slider {...settings} className='w-full h-full flex justify-center items-center px-24 pt-32'>
      {FEATURED_CARDS.map((cardItem,index)=>
      <div className='w-52 h-64 px-12' key={cardItem.id}>
       <div className='relative w-full h-full bg-slate-50 bg-opacity-30 text-black rounded-xl flex flex-col gap-4 items-center justify-end '>
        <img src={cardItem.img} alt="" className='w-52 absolute top-0' />
        <div className='w-full flex justify-center'>{cardItem.description}</div>
        <div className='w-full text-center py-4 text-xl font-semibold bg-[#006a4d] text-white rounded-xl'>{cardItem.name+index}</div>
       </div>
      </div>)}

  </Slider>
  )
}

export default Reactcarousel
