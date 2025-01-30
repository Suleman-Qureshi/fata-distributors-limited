import React, { useState } from 'react'

function Recipes() {
    const RECIPE_ITEMS=[
        {name:'item'},
        {name:'item'},
        {name:'item'},
        {name:'item'},
    ]
    const [activebtn1,setActivebtn1]=useState(true)
    const [activebtn2,setActivebtn2]=useState(false)
    const [activebtn3,setActivebtn3]=useState(false)
    const [activebtn4,setActivebtn4]=useState(false)
    const [activebtn5,setActivebtn5]=useState(false)
  return (
    <div className=' w-full h-full flex gap-8'>
      <div className='flex flex-col w-60 gap-1'>
       {/* {RECIPE_ITEMS.map((item,index)=><div key={index} className='w-full px-2 py-2 bg-[#006a4d] text-white cursor-pointer'>{item.name+index}</div>) }*/}
       <div className={`${activebtn1?"bg-[#006a4d]":""} hover:bg-[#006a4d] hover:border-none w-full px-2 py-2 text-white cursor-pointer`} onClick={handleClick1}>item1</div>
       <div className={`${activebtn2?"bg-[#006a4d]":""} hover:bg-[#006a4d] hover:border-none w-full px-2 py-2 text-white cursor-pointer`}>item1</div>
       <div className={`${activebtn3?"bg-[#006a4d]":""} hover:bg-[#006a4d] hover:border-none w-full px-2 py-2 text-white cursor-pointer`}>item1</div>
       <div className={`${activebtn4?"bg-[#006a4d]":""} hover:bg-[#006a4d] hover:border-none w-full px-2 py-2 text-white cursor-pointer`}>item2</div>
       <div className={`${activebtn5?"bg-[#006a4d]":""} hover:bg-[#006a4d] hover:border-none w-full px-2 py-2 text-white cursor-pointer`}>item3</div>
      </div>
    </div>
  )
}

export default Recipes
