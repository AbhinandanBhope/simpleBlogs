import React from 'react'
import  '../../styles/CSS/Header.css'

function Header() {
  let count =0;
  return (
   <header className="header">
      <div className="logo">React Meals</div>
      <nav>
        <ul>
          <div class="rectangle">
          <li><label htmlFor="home">Your Cart</label></li>
             <li className='count'><label htmlFor="Count"></label>{count}</li>
          
        </div>
        </ul>
      </nav>
    </header>
  )
}

export default Header