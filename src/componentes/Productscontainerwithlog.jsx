import ProductsContainer from "./ProductsContainer"
import { Withlog } from "../hoc/Withlog"

const ProductsContainerWithlog = Withlog(ProductsContainer)

export default ProductsContainerWithlog