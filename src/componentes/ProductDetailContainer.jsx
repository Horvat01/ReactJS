import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ProductDetail from "./ProductDetail";
import { getDetail } from "../firebase/db";
import Loader from "./loader";

function ProductDetailContainer() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getDetail(id)
            .then(setProduct)
            .catch(console.error);
    }, [id]);

    if (!product) {
        return <Loader/>;
    }

    return <ProductDetail product={product} />;
}

export default ProductDetailContainer;