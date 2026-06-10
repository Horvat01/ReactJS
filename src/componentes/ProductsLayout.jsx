import { Children } from "react"
// import ProductCard from "./ProductCard"

function ProductsLayout({ children }) { 
    return (
        <main className='p-3 grid grid-cols-4 gap-4'>
            {children} 
        </main>
    )
}
export default ProductsLayout