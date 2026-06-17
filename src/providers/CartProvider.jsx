import { CartContext } from "../context/CartContext"
import { useState } from "react"

function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        const productInCart = cart.find(
            prod => prod.id === product.id
        )

        if (productInCart) {
            setCart(
                cart.map(prod =>
                    prod.id === product.id
                        ? { ...prod, quantity: prod.quantity + 1 }
                        : prod
                )
            )
        } else {
            setCart([
                ...cart,
                { ...product, quantity: 1 }
            ])
        }
    }

    const removeFromCart = (id) => {
        setCart(prev =>
            prev.filter(prod => prod.id !== id)
        )
    }

    const increaseQuantity = (id) => {
        setCart(
            cart.map(prod =>
                prod.id === id
                    ? { ...prod, quantity: prod.quantity + 1 }
                    : prod
            )
        )
    }

    const decreaseQuantity = (id) => {
        const product = cart.find(
            prod => prod.id === id
        )

        if (product.quantity > 1) {
            setCart(
                cart.map(prod =>
                    prod.id === id
                        ? { ...prod, quantity: prod.quantity - 1 }
                        : prod
                )
            )
        } else {
            setCart(
                cart.filter(prod => prod.id !== id)
            )
        }
    }

    const getCartQuantity = () =>
        cart.reduce(
            (acc, prod) => acc + prod.quantity,
            0
        )

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
                getCartQuantity,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider