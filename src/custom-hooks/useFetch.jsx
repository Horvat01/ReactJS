import { useState, useEffect } from "react"

export const useFetch = (url,category) => {
    const [data, setData] = useState()

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }, [url, category])

    return data
}