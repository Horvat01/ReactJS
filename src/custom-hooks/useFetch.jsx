import { useState, useEffect } from "react"

export const useFetch = (url) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [url])

    return products
}