import ProductCard from "./ProductCard"

function ProductsLayout({ products }) {
    return (
        <main className='p-3 grid grid-cols-4'>
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    category={product.category}
                    price={product.price}
                    title={product.title}
                    src={product.thumbnail}
                />
            ))}
        </main>
    )
}
export default ProductsLayout