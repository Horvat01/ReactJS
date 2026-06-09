function Navbar() {
    return (
        <header className='flex justify-between p-3sad'>
            <input type="text" placeholder="buscar" />
            <h1 className='text-2x1 font-medium'>MueblesUY</h1>

            <nav className='gap-3 flex'>
                <a href="Cart">Cart</a>
                <a href="Shop">Shop</a>
            </nav>
        </header>
    )
}
export default Navbar