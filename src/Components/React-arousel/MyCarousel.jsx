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
        className="flex transition-transform duration-500 ease-in-out mb-10 pb-20"
        style={{
          transform: `translateX(calc(-${activeIndex} * 70vw + 11vw)) `,
        }}
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`flex-shrink-0 transition-all overflow-hidden  w-[50vw] h-[50vw] md:h-[30vw]  flex items-center justify-center rounded-3xl bg-slate-400 bg-opacity-40 text-black ${activeIndex === index
                ? "scale-105 shadow-xl shadow-black"
                : "scale-90 opacity-75"
            }  mx-[10vw] text-2xl font-bold`}
          >
            <div className="flex w-full h-full gap-4 p-6">
                <div className="w-full h-full flex flex-col ">
            <div className="h-full">{card.name}</div>
            <div className="text-base font-normal h-full">{card.description}</div>
            <div className="h-full content-end">
               
                <button className="w-44 h-12 bg-[#006241] text-center rounded-full text-white text-base font-medium">View More</button>
            </div>
                </div>
                <div className="w-full h-full flex flex-col gap-4">
                    <div className="w-full h-full flex justify-center items-center">
                        <img src={card.href}/>
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
