import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Cars from '../components/Cars'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/cars' element={<Cars />} /> 
        </Routes>
    </div>
  )
}

export default Router