import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'

function Router() {
  return (
    <Suspense>
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </Suspense>
  )
}

export default Router
