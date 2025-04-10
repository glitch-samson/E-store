import React, { useState } from 'react'
import './Navbar.css'

import logo from '../../Assets/logo.png'
import cart_icon from '../../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

import { HiOutlineMenu } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>Tima's Closet</p>
      </div>

      <div className="nav-toggle-icon" onClick={toggleMenu}>
        {menuOpen ? <IoMdClose size={30} /> : <HiOutlineMenu size={30} />}
      </div>

      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <li onClick={() => { setMenu("shop"); closeMenu(); }}>
          <Link style={{ textDecoration: 'none' }} to={'/'}>Shop</Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => { setMenu("mens"); closeMenu(); }}>
          <Link style={{ textDecoration: 'none' }} to={'/mens'}>Men</Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => { setMenu("womens"); closeMenu(); }}>
          <Link style={{ textDecoration: 'none' }} to={'/womens'}>Women</Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => { setMenu("kids"); closeMenu(); }}>
          <Link style={{ textDecoration: 'none' }} to={'/kids'}>Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to={'/login'}><button>Login</button></Link>
        <Link to={'/cart'}><img src={cart_icon} alt="Cart" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
