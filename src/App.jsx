import React from "react";
import Header from "./components/Layout/Header";
import Content from "./components/Layout/Content";
import { CartCountProvider } from "./context/CartCount";
import { useState } from "react";
function App(props) {
  const [showPopup, setShowPopup] = useState(false)
  return (
    <CartCountProvider>
      <Header setShowPopup={setShowPopup} />
      <Content showPopup={showPopup} setShowPopup={setShowPopup} />
    </CartCountProvider>
  );
}

export default App;