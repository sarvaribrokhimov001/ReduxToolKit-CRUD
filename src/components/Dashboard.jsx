import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Dashboard = () => {
  return (
    <div className='flex min-h-screen'>
      <div className='w-[250px] bg-black p-5'>
        <Sidebar />
      </div>

      <div className='flex-1'>
        <div className='h-[90px] bg-neutral-900 flex items-center px-5'>
          <Navbar />
        </div>

        <div className='p-5'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
export default Dashboard