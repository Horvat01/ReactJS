import { useNavigate } from "react-router"

function ProductCard({name, price, category, img, id}) {
    const navigate = useNavigate ()
    return (
        <div className="flex flex-col items-start gap-3 cursor-pointer bg-slate-950 p-3 rounded-xl shadow-lg" onClick={() => navigate (`/product/${id}`)}>
            <img src={img} alt={name}></img>
            <p className="mt-3 text-xs text-grayh-400">{category}</p>
            <p className="mt-1 text-base text-white">{name}</p>
            <p className="mt-1 text-sm text-amber-400">${price}</p>
        </div>)
}
export default ProductCard