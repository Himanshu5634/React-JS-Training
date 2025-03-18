import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='navbar'>      
        <ul className='nav-list'>
        <Link to={"/home"}> <li>Home</li></Link>
        <Link to={"/cart"}> <li>Cart</li></Link>
        </ul>
    </div>
  )
}

export default Navbar
