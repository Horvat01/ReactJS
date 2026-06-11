import { useFetch } from "../custom-hooks/useFetch"

function CategoryBar() {
    const data = useFetch("https://dummyjson.com/products/category-list")

    if (!data) return <h2>Cargando...</h2>

    return (
        <aside>
            <h3>Categorías</h3>
            <p>Buscador</p>

            <ul>
                {data.map(category => (
                    <li key={category}>{category}</li>
                ))}
            </ul>
        </aside>
    )
}

export default CategoryBar