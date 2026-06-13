import { useNavigate } from "react-router"

function ProductCard({title, price, category, src, id}) {
    const navigate = useNavigate ()
    return (
        <div className="flex flex-col items-start gap-3 cursor-pointer" onClick={() => navigate (`/product/${id}`)}>
            <img src={src} alt={title}></img>
            <p className="mt-3 text-xs text-grayh-400">{category}</p>
            <p className="mt-1 text-base text-white">{title}</p>
            <p className="mt-1 text-sm text-amber-400">{price}</p>
        </div>)
}
export default ProductCard