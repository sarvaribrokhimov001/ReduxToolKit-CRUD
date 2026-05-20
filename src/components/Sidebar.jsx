import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <ul className='flex flex-col justify-center gap-[10px] mt-[100px]'>
      <li className='pl-[30px]'> <NavLink className={'text-red-600 text-[30px] hover:text-green-600 font-bold'} to="/"> Dashboard </NavLink> </li>
      <li className='pl-[30px]'> <NavLink className={'text-red-600 text-[30px] hover:text-green-600 font-bold'} to="/cars"> Cars </NavLink> </li>
    </ul>
  )
}
export default Sidebar