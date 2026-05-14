import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar' 

const Dashboard = () => {
  return (
    <div className='flex'>
        <div className='bg-black w-[200px] h-screen '>
            <Sidebar/>
        </div>

        <div className='bg-red-600'>
            <Navbar/>
            <Outlet/>
        </div>
    </div>
  )
}

export default Dashboard