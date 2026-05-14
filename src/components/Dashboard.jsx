import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar' 

const Dashboard = () => {
  return (
    <div>
      <div className='w-[200px] min-h-screen bg-black text-white flex'>
        <Sidebar/>

        <div className='w-full h-[100px]'>
          <Navbar/>

        <main>
          <Outlet/>
        </main>
          </div>
        </div>
    </div>
  )
}
export default Dashboard