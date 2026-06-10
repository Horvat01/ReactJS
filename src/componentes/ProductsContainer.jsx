import { useState, useEffect } from "react"
import ProductsLayout from "./ProductsLayout"
import Productsmap from "./Productsmap"

function ProductsContainer() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])

    return (
        <ProductsLayout>
            <Productsmap products={products}/>
        </ProductsLayout>
    )
}

export default ProductsContainer