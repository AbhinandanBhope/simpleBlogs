import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Content from "./components/Layout/Content";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (qty) => {
    setCartCount((prevCount) => prevCount + qty);
  };

  return (
    <>
      <Header cartCount={cartCount} />
      <Content onAddToCart={handleAddToCart} />
    </>
  );
}

export default App;