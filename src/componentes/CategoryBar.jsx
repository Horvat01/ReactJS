import { useNavigate } from "react-router"
import { getCategories } from "../firebase/db"
import { useState, useEffect } from "react"

function CategoryBar() {
    const [categories,setCategories] = useState ([])
    const navigate = useNavigate()
    
    useEffect (()=>{
     getCategories ()
     .then (cats => setCategories (cats))
    },[])

    if (!categories) return <h2>Cargando...</h2>

return (
    <aside className="w-64 p-5  shadow-lg rounded-xl">
        <h3 className="uppercase text-xl font-bold mb-4 text-800">
            categories
        </h3>

        <p className="mb-3 text-sm text-gray-500 uppercase">
            Stock
        </p>

        <ul className="max-h-80 overflow-y-auto space-y-2">
            {categories.map(category => (
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