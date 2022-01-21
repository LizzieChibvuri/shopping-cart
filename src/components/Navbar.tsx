import React from 'react'

const NavBar=()=>{
  return (
    <div className="navBar">
      <ul>
        <li className='leftMenu'><a href="LOGO">BRANDNAME</a></li>
        <li className='leftMenu'><a href="products">Products</a></li>
        <li className='rightMenu'><a href="cart">Cart</a></li>
      </ul>
    </div>
   
  )
}

export default NavBar