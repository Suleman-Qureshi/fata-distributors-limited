import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
function MyCarousel() {
  const cardData = [
    {id:1,name:"Name-1",href:'./product-1.png',description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti sequi similique minima fugiat in possimus maiores, illo vitae veniam nesciunt."},
    {id:2,name:"Name-2",href:'./product-1.png',description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti sequi similique minima fugiat in possimus maiores, illo vitae veniam nesciunt."},
    {id:3,name:"Name-3",href:'./product-1.png',description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti sequi similique minima fugiat in possimus maiores, illo vitae veniam nesciunt."},
    {id:4,name:"Name-4",href:'./product-1.png',description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti sequi similique minima fugiat in possimus maiores, illo vitae veniam nesciunt."},
    {id:5,name:"Name-5",href:'./product-1.png',description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti sequi similique minima fugiat in possimus maiores, illo vitae veniam nesciunt."},
  
    ];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="max-w-[100vw] relative">
      {/* Navigation Buttons */}
      <div className="w-screen">
        <button
          className=" bg-[#006241] text-white font-bold w-10 h-10 border-white border rounded-[50%] flex justify-center items-center absolute top-1/2 -translate-y-1/2 left-6 z-30"
          onClick={handlePrev}
        >
            <FaChevronLeft />
        </button>
        <button
         className=" bg-[#006241] text-white flex justify-center items-center font-bold w-10 h-10 border-white border rounded-[50%] absolute top-1/2 -translate-y-1/2 right-6 z-30"
          onClick={handleNext}
        >
                <FaChevronRight />

        </button>
      </div>

      {/* Carousel Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out pb-10"
        style={{
          transform: `translateX(calc(-${activeIndex} * 70vw + 11vw)) `,
        }}
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`flex-shrink-0 transition-all overflow-hidden  w-[50vw] h-[50vw] md:h-[30vw] max-sm:h-[60vh]  flex items-center justify-center rounded-3xl bg-slate-400 bg-opacity-40 text-black ${activeIndex === index
                ? "scale-105 shadow-xl shadow-black"
                : "scale-90 opacity-75"
            }  mx-[10vw] text-2xl font-bold`}
          >
            <div className="flex w-full max-md:flex-col-reverse max-md:justify-between h-full max-sm:h-auto gap-4 max-sm:gap-2 p-6 max-md:p-2">
                <div className="w-full h-full flex flex-col gap-1  max-md:items-center">
            <div className="h-full max-sm:text-base max-sm:h-auto max-sm:content-end">{card.name}</div>
            <div className="text-sm font-normal h-full max-sm:h-auto max-lg:block hidden">{(card.description.length>20?card.description.slice(0, 20)+"...":card.description)}</div>
            <div className="text-base font-normal h-full block max-lg:hidden">{card.description}</div>
            <div className="h-full content-end max-lg:content-start max-lg:h-auto">
               
                <button className="w-44 h-12 max-xl:h-8 max-xl:w-40 max-lg:text-base font-medium bg-[#006241] text-center rounded-full text-white max-sm:text-xs  max-sm:font-light cursor-pointer">View More</button>
            </div>
                </div>
                <div className="w-full h-full flex flex-col gap-4">
                    <div className="w-full h-full flex justify-center items-center">
                        <img src={card.href} className="h-full max-md:h-32 max-sm:h-28"/>
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyCarousel;
