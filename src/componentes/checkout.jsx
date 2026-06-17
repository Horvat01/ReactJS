import { useCart } from "../custom-hooks/useCart";
import { CreateOrder } from "../firebase/db";
import { serverTimestamp } from "firebase/firestore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

function Checkout() {
    const { cart, clearCart } = useCart();
    const navigate = useNavigate ()
    const subtotal = cart.reduce((acc, prod) => acc + prod.price, 0);
    const taxes = subtotal * 0.22;
    const total = subtotal + taxes;

    const handleCreateOrder = (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const address = form.address.value;


        CreateOrder({
            name,
            email,
            phone,
            address,
            items: cart,
            time: serverTimestamp()

        })
    navigate ('/')
    clearCart ()
    };

    return (
        <div className="max-w-7xl mx-auto mt-10 p-6">
            <h2 className="text-3xl font-bold text-amber-400 mb-8">
                Checkout
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">


                <div className="md:col-span-2 bg-gray-900 rounded-xl p-8 shadow-lg">
                    <form onSubmit={handleCreateOrder} className="space-y-6">

                        <input
                            name="name"
                            type="text"
                            required
                            placeholder="Full Name"
                            className="w-full p-3 rounded-lg bg-gray-800 text-white"
                        />

                        <input
                            name="email"
                            type="email"
                            required
                            placeholder="Email"
                            className="w-full p-3 rounded-lg bg-gray-800 text-white"
                        />

                        <input
                            name="phone"
                            type="tel"
                            required
                            placeholder="Phone"
                            className="w-full p-3 rounded-lg bg-gray-800 text-white"
                        />

                        <input
                            name="address"
                            type="text"
                            required
                            placeholder="Address"
                            className="w-full p-3 rounded-lg bg-gray-800 text-white"
                        />

                        <button
                            type="submit"
                            className="w-full bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 rounded-lg"
                        >
                            Complete Purchase
                        </button>

                    </form>
                </div>


                <div className="bg-gray-900 rounded-xl p-8 text-white">
                    <h3 className="text-xl mb-4">Order Summary</h3>

                    {cart.map(prod => (
                        <div key={prod.id} className="flex justify-between border-b border-gray-700 py-2">
                            <span>{prod.title || prod.name}</span>
                            <span>${prod.price}</span>
                        </div>
                    ))}

                    <div className="mt-4">
                        <p>Subtotal: ${subtotal.toFixed(2)}</p>
                        <p>Taxes: ${taxes.toFixed(2)}</p>
                        <p className="font-bold text-amber-400">
                            Total: ${total.toFixed(2)}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Checkout;