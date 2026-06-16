import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ProductsLayout from "./ProductsLayout";
import Productsmap from "./Productsmap";
import { getProducts, getProductsByCategory } from "../firebase/db";

function ProductsContainer() {
    const { categoryname } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (categoryname) {
            getProductsByCategory(categoryname)
                .then(prods => setProducts(prods));
        } else {
            getProducts()
                .then(prods => setProducts(prods));
        }
    }, [categoryname]);

    return (
        <ProductsLayout>
            <Productsmap products={products} />
        </ProductsLayout>
    );
}

export default ProductsContainer;