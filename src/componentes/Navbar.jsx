import { useRef } from "react"
function Navbar() {
    const imputRef = useRef(null)
    const handleClick = () => {
        imputRef.current.focus()
    }
    return (
        <header className="flex items-center justify-between px-6 py-4">
            <h1 className="text-3xl font-bold text-white">
                SuperUY
            </h1>

            <div className="flex items-center gap-2 w-full max-w-md mx-8">
                <input
                    ref={imputRef}
                    type="text"
                    placeholder="Buscar productos..."
                    className="flex-1 px-4 py-2 rounded-lg border border-blue-300 bg-blue-100/20 text-white placeholder-blue-200 outline-none focus:ring-2 focus:ring-blue-300"
                />

                <button
                    onClick={handleClick}
                    className="px-4 py-2 rounded-lg  hover:bg-blue-800 text-white transition"
                >
                    Buscar
                </button>
            </div>

            <nav className="flex gap-6 text-white font-medium">
                <a href="Cart" className="hover:text-blue-200 transition">
                    Cart
                </a>

                <a href="Shop" className="hover:text-blue-200 transition">
                    Shop
                </a>
            </nav>
        </header>
    )
}
export default Navbar