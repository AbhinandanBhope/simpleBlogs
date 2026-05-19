import React from "react";
import Header from "./components/Layout/Header";
import Content from "./components/Layout/Content";
import { CartCountProvider } from "./context/CartCount";

function App() {
  return (
    <CartCountProvider>
      <Header />
      <Content />
    </CartCountProvider>
  );
}

export default App;