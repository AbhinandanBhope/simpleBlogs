import React, { useState } from 'react'
import '../../styles/CSS/Content.css'

function Content() {
  const [items] = useState([
    {
      title: "Burger",
      summary: "lorem loerem lorem",
      price: "10.99"
    },
    {
      title: "Pizza",
      summary: "Cheesy pizza loaded with toppings",
      price: "12.99"
    }
  ]);

  const [amounts, setAmounts] = useState({});
  const [popupData, setPopupData] = useState({ isOpen: false, total: 0, title: '' });

  const handleAmountChange = (index, value) => {
    setAmounts({ ...amounts, [index]: Math.max(1, value) });
  };

  const handleAdd = (item, index) => {
    const qty = amounts[index] !== undefined ? amounts[index] : 1;
    const total = (parseFloat(item.price) * qty).toFixed(2);
    setPopupData({ isOpen: true, total, title: item.title });
  };

  return (
    <div className="content">
      {popupData.isOpen && (
        <dialog open className="popup" style={{
          position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '30vw', minHeight: '25vh',
          margin: 0, padding: '20px', border: 'none', zIndex: 9999,
          borderRadius: '25px', boxShadow: '0 10px 40px rgba(0,0,0,0.6)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
          backgroundColor: 'white', color: 'black', textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>Added to Cart! 🛒</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '25px' }}>{popupData.title}: <strong>${popupData.total}</strong></p>
          <button 
            onClick={() => setPopupData({ ...popupData, isOpen: false })} 
            className="add-btn"
            style={{ fontSize: '1rem', padding: '10px 30px', borderRadius: '15px' }}
          >
            Close
          </button>
        </dialog>
      )}

      <div className="items">
        <div className="header-info" style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div className="title" style={{ padding: '10px' }}>Delicious Burger 🍔</div>
          <div className="summary" style={{ padding: '0 10px 20px 10px' }}>Freshly grilled burger with crispy lettuce, cheese, and juicy patty.</div>
        </div>

        {items.map((item, index) => (
          <div key={index}>
            <div className="item-row">
              <div className="item-info">
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
                <h3>${item.price}</h3>
              </div>

              <div className="add-items">
                <div className='input_items_heading'>
                  <h4>Amount</h4>
                  <input 
                    type="number" 
                    className='input_style' 
                    min="1"
                    placeholder="1" 
                    value={amounts[index] !== undefined ? amounts[index] : ''}
                    onChange={(e) => handleAmountChange(index, parseInt(e.target.value) || 1)}
                  />
                </div>
                <button className="add-btn" onClick={() => handleAdd(item, index)}>Add</button>
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