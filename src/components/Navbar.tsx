import React from 'react'
import { Link } from 'react-router-dom'

const NavBar=()=>{
  return (
    <div className="navBar">
      <ul>
        <li className='leftMenu'><Link to="/product">BRANDNAME</Link></li>
        <li className='leftMenu'><Link to="/products">Products</Link></li>
        <li className='leftMenu'><Link to="/about">About</Link></li>
        <li className='leftMenu'><Link to="/contact">Contact</Link></li>
        <li className='rightMenu'><Link to="/cart">Cart</Link></li>
      </ul>
    </div>
   
  )
}

export default NavBar