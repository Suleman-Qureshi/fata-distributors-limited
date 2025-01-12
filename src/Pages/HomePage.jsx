import React from 'react'
import Cards from '../Components/Cards'

function HomePage() {
  return (
    <>
    <section className='w-screen h-screen bg-[url("herobg.jpg")] bg-center bg-cover'>
      <div className='h-screen flex justify-end mr-12'>
      <img src="./png 3.png" alt="" className='h-full' />
      </div>
    </section>
    <section>
      <Cards/>
    </section>
    </>
  )
}
export default HomePage
