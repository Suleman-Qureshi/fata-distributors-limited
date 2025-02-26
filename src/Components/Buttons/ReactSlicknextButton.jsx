import React from 'react'
function ReactSlicknextButton({
    className,
    onClick
}) {
  return (
    <button 
    className={` p-4 shadow-xl rounded-full bg-white text-black hover:text-black text-xl opacity-50 hover:opacity-100 duration-150 -mr-24 max-lg:-mr-16 absolute max-lg:-mt-44 max-sm:-mt-10 ${className}`}
    onClick={onClick}
    style={{position:"absolute",right:"5rem"}}
    >
        <div className='-translate-y-4 -translate-x-2'>
        <span className='flex w-5 h-1 rounded-xl bg-black z-10 rotate-[40deg] -translate-y-2'></span>
        <span className='flex w-5 h-1 rounded-xl bg-black z-10 rotate-[-40deg] '></span>
        </div>
    </button>
  )
}
export default ReactSlicknextButton
