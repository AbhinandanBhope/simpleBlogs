import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  // handle input change
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  // add item
  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      name: formData.name,
      price: Number(formData.price),
      quantity: Number(formData.quantity),
    };

    setItems((prev) => [...prev, newItem]);

    // clear form
    setFormData({ name: "", price: "", quantity: "" });
  }

  // increase quantity
  function increaseQty(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  // decrease quantity
  function decreaseQty(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  // delete item
  function deleteItem(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  // total price
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Vegetable Shop (Owner Panel)</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Vegetable Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          name="price"
          type="number"
          placeholder="Price ₹"
          value={formData.price}
          onChange={handleChange}
        />

        <input
          name="quantity"
          type="number"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
        />

        <button type="submit">Add</button>
      </form>

      <hr />

      {/* LIST */}
      {items.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <strong>{item.name}</strong> | ₹{item.price} | Qty: {item.quantity}

          <button onClick={() => increaseQty(item.id)}>+</button>
          <button onClick={() => decreaseQty(item.id)}>-</button>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      ))}

      <hr />

      {/* TOTAL */}
      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default App;