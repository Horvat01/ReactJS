import { useState, useEffect } from "react";
import { useParams } from "react-router";

function ProductDetail() {
    const [product, setProduct] = useState({title: '', price: 0,});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Error ${res.status}`);
                }
                return res.json();
            })
            .then(data => setProduct(data))
            .catch(error => console.error(error));
    }, [id]);

    if (!product) {
        return <h2>Cargando...</h2>;
    }

return (
        <div className="max-w-2xl mx-auto p-6 bg-grey-900 rounded-xl shadow-lg mt-10 flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2 bg-grey-1000 p-2 rounded-lg flex items-center justify-center">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-auto object-cover rounded"
                />
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white mb-2">{product.title}</h1>
                    <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                </div>
                <div>
                    <p className="text-3xl font-extrabold text-amber-400 mb-4">${product.price}</p>
                    <button className="w-full bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-2 px-4 rounded transition-colors">
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;