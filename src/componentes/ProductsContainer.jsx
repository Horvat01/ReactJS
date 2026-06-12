import ProductsLayout from "./ProductsLayout"
import Productsmap from "./Productsmap"
import { useParams } from "react-router"
import { useState, useEffect } from "react"

function ProductsContainer() {
    // const data = useFetch("https://dummyjson.com/products")
    const { categoryname } = useParams()
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        const url = 'https://dummyjson.com/products'
        const urlCategories = `https://dummyjson.com/products/category/${categoryname}`

    fetch(categoryname ? urlCategories : url)
        .then(res => res.json())
        .then(data => setProducts(data.products));
        },[categoryname])

    // if (!data) return <h2>Cargando...</h2>

    return (
        <ProductsLayout>
            <Productsmap products={products} />
        </ProductsLayout>
    )
}

export default ProductsContainer