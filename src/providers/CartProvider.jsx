import { CartContext } from "../context/CartContext"
import { useState } from "react"

function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const addToCart = product => {
        setCart([...cart, product])
    }
    const getCartQuantity = () => cart.length

    const clearCart = () => {
        setCart([])
    }

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(prod => prod.id !== id));
    };

    return (<CartContext.Provider value={{ addToCart, cart, getCartQuantity, clearCart, removeFromCart }}>
        {children}
    </CartContext.Provider>)
}

export default CartProvider
