import { useRef, useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { CartContext } from "../context/CartContext";

function Navbar() {
    const navigate = useNavigate();
    const { getCartQuantity } = useContext(CartContext);

    const cartQuantity = getCartQuantity();

    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    };

    return (
        <header className="flex items-center justify-between px-6 py-4">
            <h1
                className="text-3xl font-bold text-white cursor-pointer"
                onClick={() => navigate("/")}
            >
                SuperUY
            </h1>

            <div className="flex items-center gap-2 w-full max-w-md mx-8">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Serch products..."
                    className="flex-1 px-4 py-2 rounded-lg border border-blue-300 bg-blue-100/20 text-white placeholder-blue-200 outline-none focus:ring-2 focus:ring-blue-300"
                />

                <button
                    onClick={handleClick}
                    className="px-4 py-2 rounded-lg hover:bg-blue-800 text-white transition"
                >
                    Serch 
                </button>
            </div>

            <nav className="flex gap-6 text-white font-medium">
                <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                        isActive ? "text-blue-200" : "hover:text-blue-200 transition"
                    }
                >
                    Cart ({cartQuantity})
                </NavLink>
            </nav>
        </header>
    );
}

export default Navbar;