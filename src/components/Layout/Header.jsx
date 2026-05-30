import React, { useContext } from 'react'
import '../../styles/CSS/Header.css'
import { CartCountContext } from '../../context/CartCount'

function Header(props) {
  const { cartCount } = useContext(CartCountContext)
    
  return (
    <header className="header">
      <div className="logo">React Meals</div>
      <nav>
        <ul>
          <div className="rectangle">
            <li><label htmlFor="home">Your Cart</label></li>
            <li className='count'><label htmlFor="Count"></label>{cartCount}</li>
          </div>
           <div className="rectangle">
            <li><label htmlFor="home" onClick={() => props.setShowPopup(true)} >Add Menu</label></li>

            
            
          </div>
        </ul>
      </nav>
      
    </header>
  )
}

export default Header