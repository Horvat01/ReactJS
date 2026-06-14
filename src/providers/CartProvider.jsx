import { CartContext } from "../context/CartContext"
import { useState } from "react"

function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const addToCart = product => {
        setCart([...cart, product])
    }
    const getCartQuantity = () => cart.length
    
    return (<CartContext.Provider value={{addToCart, cart, getCartQuantity}}>
        {children}
    </CartContext.Provider>)
}

export default CartProvider
