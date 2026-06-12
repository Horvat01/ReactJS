import { useFetch } from "../custom-hooks/useFetch"

function CategoryBar() {
    const data = useFetch("https://dummyjson.com/products/category-list")

    if (!data) return <h2>Cargando...</h2>

return (
    <aside className="w-64 p-5  shadow-lg rounded-xl">
        <h3 className="uppercase text-xl font-bold mb-4 text-800">
            Categorías
        </h3>

        <p className="mb-3 text-sm text-gray-500">
            Buscador
        </p>

        <ul className="max-h-80 overflow-y-auto space-y-2">
            {data.map(category => (
                <li
                    key={category}
                    className=" uppercase p-2 rounded-lg cursor-pointer transition hover:bg-gray-100 hover:text-blue-600"
                >
                    {category}
                </li>
            ))}
        </ul>
    </aside>
)
}

export default CategoryBar