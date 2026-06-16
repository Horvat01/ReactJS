import { createContext } from "react";

export const CartContext = createContext (null)

export const removeFromCart = (id) => {
    setCart(prev => prev.filter(prod => prod.id !== id));
};

