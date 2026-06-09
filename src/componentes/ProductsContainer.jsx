import ProductCard from "./ProductCard"
import { useState, useEffect } from "react"
function ProductsContainer() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }
    )
    return (
        <main className='p-3 grid grid-cols-4'>
            {products.map(product => (<ProductCard
                category={product.category}
                price={product.price}
                title={product.title}
                src={product.thumbnail}
                key={product.id}
            />
            ))}
        </main>
    )

}
export default ProductsContainer