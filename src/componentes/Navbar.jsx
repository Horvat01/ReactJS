import { useRef } from "react"
function Navbar() {
    const imputRef = useRef(null)
    const handleClick = () => {
        imputRef.current.focus()
    }
    return (
        <header className='flex justify-between p-3sad'>
            <div>
                <input ref={imputRef} type="text" placeholder="buscar" />
                <button onClick={handleClick} className="border px-2 py-1">Click to focus</button>
            </div>
            <h1 className='text-2x1 font-medium'>SuperUY</h1>

            <nav className='gap-3 flex'>
                <a href="Cart">Cart</a>
                <a href="Shop">Shop</a>
            </nav>
        </header>
    )
}
export default Navbar