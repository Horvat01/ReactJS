import { CartContext } from "../context/CartContext"
import { useState } from "react"

function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const addToCart = product => {
        setCart([...cart, product])
    }

    return (<CartContext.Provider value={{addToCart, cart}}>
        {children}
    </CartContext.Provider>)
}

export default CartProvider
