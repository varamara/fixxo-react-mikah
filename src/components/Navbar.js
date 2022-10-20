import React from 'react'
import Logo from '../assets/images/logo.svg'

const Navbar = () => {
  return (
    <nav className="__navbar">
      <div className="__container">
        <img src={Logo} alt=""></img>
        <div className="links">
          <a href="index.html">Home</a>
          <a href="#">Categories</a>
          <a href="#">Products</a>
          <a href="contacts.html">Contacts</a>
        </div>
        <div className="btn_container">
        <a href="#" className='__shop_btn'><i class="fa-regular fa-magnifying-glass"></i></a>
        <a href="#" className='__shop_btn'><i class="fa-regular fa-code-compare"></i></a>
        <a href="#" className='__shop_btn'><i class="fa-regular fa-heart"></i></a>
        <a href="#" className='__shop_btn'><i class="fa-regular fa-bag-shopping "></i></a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar