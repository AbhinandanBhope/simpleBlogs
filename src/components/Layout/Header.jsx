import React from 'react'
import '../../styles/CSS/Header.css'

function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="logo">React Meals</div>
      <nav>
        <ul>
          <div className="rectangle">
            <li><label htmlFor="home" onClick={() => { cartCount }}>Your Cart</label></li>
            <li className='count'><label htmlFor="Count"></label>{cartCount}</li>
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Header