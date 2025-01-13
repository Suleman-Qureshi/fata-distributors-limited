import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import RecipePage from '../Pages/RecipePage'
import AboutusPage from '../Pages/AboutusPage'
import ContactusPage from '../Pages/ContactusPage'
import ProductsPage from '../Pages/ProductsPage'

function Router() {
  return (
    <Suspense>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/Recipe' element={<RecipePage/>} />
        <Route path='/Products' element={<ProductsPage/>} />
        <Route path='/About-us' element={<AboutusPage/>}/>
        <Route path='/Contact-us' element={<ContactusPage/>}/>
      </Routes>
    </Suspense>
  )
}

export default Router
