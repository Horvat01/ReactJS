import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

function ProductDetail({ product }) {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(product);
        toast.success("Product added to cart");
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-slate-950 rounded-xl shadow-lg mt-10 flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2 p-2 rounded-lg flex items-center justify-center">
                {product.img && (
                    <img
                        src={product.img}
                        alt={product.name}
                        className="w-full h-auto object-cover rounded"
                    />
                )}
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white mb-2">
                        {product.name}
                    </h1>

                    <p className="text-gray-400 text-sm mb-4">
                        {product.description}
                    </p>
                </div>

                <div>
                    <p className="text-3xl font-extrabold text-amber-400 mb-4">
                        ${product.price}
                    </p>

                    <button
                        className="w-full bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-2 px-4 rounded transition-colors"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;