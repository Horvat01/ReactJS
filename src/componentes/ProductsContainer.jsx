import ProductsLayout from "./ProductsLayout"
import Productsmap from "./Productsmap"
import { useFetch } from "../custom-hooks/useFetch"

function ProductsContainer() {
    const data = useFetch("https://dummyjson.com/products")

    if (!data) return <h2>Cargando...</h2>

    return (
        <ProductsLayout>
            <Productsmap products={data.products} />
        </ProductsLayout>
    )
}

export default ProductsContainer