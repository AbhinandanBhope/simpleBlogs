/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from 'react';

export const CartCountContext = createContext();

export const CartCountProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = (qty) => {
        setCartCount(prev => prev + qty);
    };

    return (
        <CartCountContext.Provider value={{ cartCount, handleAddToCart }}>
            {children}
        </CartCountContext.Provider>
    );
};