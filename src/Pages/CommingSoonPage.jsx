import React from 'react'
import { useTypewriter,Cursor, Typewriter } from 'react-simple-typewriter';
function CommingSoonPage() {

  return (
    <section className='w-screen h-screen asd flex items-center gap-6 flex-col text-white py-24 px-12 text-center'>
        <img src="./logo bg.png" alt="" className='w-28 -translate-y-12' />
            <div className='flex items-center justify-between gap-24'>
       
        <div className='flex gap-4 flex-col items-center text-center justify-center translate-x-4'>
      <h1 className='text-6xl font-extralight silkscreen tracking-tighter'><Typewriter words={['We will be back soon...','We will be back soon...',]} loop /><Cursor/></h1>
      <p className='text-base font-extralight translate-x-1.5 silkscreen'>We're working hard to bring you a fantastic experience. Stay tuned!</p>
        </div>
            </div>
            <div className='flex translate-y-20'>
                <img src="./crop.gif" alt="" />
                <img src="./crop.gif" alt="" className='-translate-x-12' />
                <img src="./crop.gif" alt="" className='-translate-x-12' />
                <img src="./crop.gif" alt="" />
                <img src="./crop.gif" alt="" className='-translate-x-12' />
                <img src="./crop.gif" alt="" />
                <img src="./crop.gif" alt="" />
                <img src="./crop.gif" alt="" />
            </div>
    </section>
  )
}

export default CommingSoonPage
