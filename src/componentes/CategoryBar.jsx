function CategoryBar() {
    return (
        <aside className="w-64 min-h-screen  p-5 border-r">
            <h3 className="uppercase font-bold text-lg ">
                Categorías
            </h3>
            <p className="uppercase text-sm text-gray-500 mb-4">
                Buscador de productos
            </p>
            <ul className="space-y-2">
                <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors">
                    Muebles
                </li>
                <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors">
                    Hogar
                </li>
                <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors">
                    Cocina
                </li>
                <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors">
                    Perfumes
                </li>
                <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors">
                    Maquillaje
                </li>
            </ul>
        </aside>
    )
}
export default CategoryBar