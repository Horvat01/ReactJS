import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ProductDetail from "./ProductDetail";

function ProductDetailContainer() {
    const [product, setProduct] = useState({ title: '', price: 0 });
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Error ${res.status}`);
                }
                return res.json();
            })
            .then(data => setProduct(data))
            .catch(error => console.error(error));
    }, [id]);

    if (!product) {
        return <h2>Cargando...</h2>;
    }


    return <ProductDetail product={product} />;
}


export default ProductDetailContainer;