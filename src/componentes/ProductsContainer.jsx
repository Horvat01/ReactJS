import ProductsLayout from "./ProductsLayout"
import Productsmap from "./Productsmap"
import { useFetch } from "../custom-hooks/useFetch"

function ProductsContainer() {
    const products = useFetch("https://dummyjson.com/products")

    return (
        <ProductsLayout>
            <Productsmap products={products} />
        </ProductsLayout>
    )
}

export default ProductsContainer