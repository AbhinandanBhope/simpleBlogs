import React, { useState } from 'react'
import  '../../styles/CSS/Content.css'
function Content() {

   const [items, setItems] = useState([
    {
      title: "Burger",
      summery: "lorem loerem lorem",
      price: "10.99"
    },
    {
      title: "Pizza",
      summery: "Cheesy pizza loaded with toppings",
      price: "12.99"
    }
  ]);


  return (
     <div className="content">
        <div className='box'> 
            <div className="title">Delicious Burger 🍔</div>
            <div className="summery">Freshly grilled burger with crispy lettuce, cheese, and juicy patty.</div>
              

        </div>
        <div className="items">
           {items.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>{item.summery}</p>
            <h3>${item.price}</h3>
            <hr className="line" />
          </div>
        ))}
          
        </div>
        
      
    </div>
  )
}

export default Content