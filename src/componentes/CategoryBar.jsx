import { useFetch } from "../custom-hooks/useFetch"
import { useNavigate } from "react-router"

function CategoryBar() {
    const data = useFetch("https://dummyjson.com/products/category-list")
    const navigate = useNavigate()

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
                    key={category} onClick={() => navigate(`/category/${category}`)}
                    className=" uppercase p-2 rounded-lg cursor-pointer transition hover:bg-gray-100 hover:text-blue-600 cursor-pointer"
                >
                    {category}
                </li>
            ))}
        </ul>
    </aside>
)
}

export default CategoryBar