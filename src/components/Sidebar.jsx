import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
        <ul>
            <li> <NavLink to="/"> Dashboard </NavLink> </li>
            <li> <NavLink to="/cars"> Cars </NavLink> </li>
        </ul>
    </div>
  )
}

export default Sidebar