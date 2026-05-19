import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <ul className='space-y-4'>
      <li> <NavLink to="/"> Dashboard </NavLink> </li>
      <li> <NavLink to="/cars"> Cars </NavLink> </li>
    </ul>
  )
}
export default Sidebar