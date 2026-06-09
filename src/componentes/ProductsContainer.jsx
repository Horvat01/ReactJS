import { useState, useEffect } from "react"
import ProductsLayout from "./ProductsLayout"

function ProductsContainer() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])

    return <ProductsLayout products={products} />
}

export default ProductsContainer