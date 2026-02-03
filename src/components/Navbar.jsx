import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <NavLink className={(e) => { return e.isActive ? "active" : "" }} to="/"><li>Home</li></NavLink>
        <NavLink className={(e) => { return e.isActive ? "active" : "" }} to="/about"><li>About</li></NavLink>
        <NavLink className={(e) => { return e.isActive ? "active" : "" }} to="/contact"><li>Contact</li></NavLink>
      </ul>
    </nav>
  )
}

export default Navbar
