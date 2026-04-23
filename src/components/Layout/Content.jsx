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
    
    <div className="item-row">
      
      <div className="item-info">
        <h2>{item.title}</h2>
        <p>{item.summery}</p>
        <h3>${item.price}</h3>
      </div>
     
      <div className="add-items">
        <div className='input_items_heading'>
          <h4>Amount</h4>
        <input type="number" className='input_style' placeholder="1" />
        </div>
        <button className="add-btn">Add</button>
      </div>

    </div>

    <hr className="line" />
    
  </div>
))}
          
        </div>
        
      
    </div>
  )
}

export default Content