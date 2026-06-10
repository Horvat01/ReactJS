import ProductCard from "./ProductCard"

function Productsmap({products}) {
    return (
        <>
        {
            products.map(product => (
                <ProductCard
                    key={product.id}
                    category={product.category}
                    price={product.price}q
                    title={product.title}
                    src={product.thumbnail}
                />
            ))}
            </>
            )
}

export default Productsmap