import React from 'react'
function ReactSlickpreviousButton({
    className,
    onClick
}) {
  return (
    <button 
    className={`z-40 p-4 shadow-xl rounded-full bg-white text-black hover:text-black text-xl opacity-50 hover:opacity-100 duration-150 relative ${className}`}
    onClick={onClick}
    >
        <div className='-translate-y-4 -translate-x-3 '>
        <span className='flex w-5 h-1 rounded-xl bg-black z-10 rotate-[140deg] -translate-y-2'></span>
        <span className='flex w-5 h-1 rounded-xl bg-black z-10 rotate-[-140deg]'></span>
        </div>
    </button>
  )
}

export default ReactSlickpreviousButton
