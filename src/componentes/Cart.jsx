import { useCart } from '../custom-hooks/useCart'

function Cart() {
    const { cart } = useCart()

    const subtotal = cart.reduce((acc, prod) => acc + prod.price, 0)
    const taxes = subtotal * 0.22
    const total = subtotal + taxes

    return (
        <div className="min-h-screen  p-6">
            <h2 className="text-3xl font-bold text-white mb-8 uppercase">
                Cart Summary
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Products */}
                <div className="lg:col-span-2 space-y-4">
                    {cart.map(prod => (
                        <div
                            key={prod.id}
                            className="flex gap-4  border border-slate-800 rounded-2xl p-5"
                        >
                            <img
                                src={prod.thumbnail}
                                alt={prod.title}
                                className="w-32 h-32 object-cover rounded-xl"
                            />

                            <div className="flex flex-col justify-between flex-1">
                                <div>
                                    <h3 className="font-bold text-xl text-white">
                                        {prod.title}
                                    </h3>

                                    <p className="text-slate-400 text-sm capitalize">
                                        {prod.category}
                                    </p>

                                    <p className="text-slate-300 text-sm mt-2 line-clamp-2">
                                        {prod.description}
                                    </p>
                                </div>

                                <div className="flex justify-between items-center mt-4">
                                    <p className="font-bold text-2xl text-amber-400">
                                        ${prod.price}
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <p className="text-slate-300 font-medium">
                                            Qty: 1
                                        </p>

                                        <button className="px-4 py-2 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 transition">
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className=" border  rounded-2xl p-6 h-fit sticky top-5">
                    <h2 className="text-2xl font-bold text-white mb-6">
                        Order Details
                    </h2>

                    <div className="space-y-4">
                        <div className="flex justify-between text-slate-300">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between text-slate-300">
                            <span>Taxes (22%)</span>
                            <span>${taxes.toFixed(2)}</span>
                        </div>

                        <hr className="border-slate-700" />

                        <div className="flex justify-between text-2xl font-bold text-amber-400">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>

                        <button className="w-full bg-amber-400 hover:bg-amber-500 text-black py-3 rounded-lg font-bold transition mt-4">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cart