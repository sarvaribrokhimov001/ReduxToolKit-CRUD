import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full'>
         <ul className='flex justify-center items-center gap-20'>
            <li> <NavLink className={'text-red-600 text-[30px] hover:text-green-600 font-bold'} to="/"> Dashboard </NavLink> </li>
            <li> <NavLink className={'text-red-600 text-[30px] hover:text-green-600 font-bold'} to="/cars"> Cars </NavLink> </li>
        </ul>
    </div>
  )
}
export default Navbar