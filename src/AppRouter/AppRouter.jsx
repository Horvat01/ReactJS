import { BrowserRouter, Routes, Route } from "react-router";
import CategoryBar from '../componentes/CategoryBar'
import ProsuctsContainer from '../componentes/ProductsContainer'
import Navbar from '../componentes/Navbar'
import ProductsContainerWithlog from '../componentes/Productscontainerwithlog'
import ProductDetailContainer from "../componentes/ProductDetailContainer";
import CartProvider from "../providers/CartProvider";


function AppRouter() {
    return (
        <CartProvider>
        <BrowserRouter>
            <Navbar />
            <div className='flex'>
                <CategoryBar />
                <Routes>
                    <Route path="/" element={<ProductsContainerWithlog />} />
                    <Route path="/category/:categoryname" element={<ProsuctsContainer/>} />
                    <Route path="/product/:id" element={<ProductDetailContainer/>} />
                    <Route path="/cart" element={<div>Cart</div>} />
                    <Route path="*" element={<div>Pagina no existente.</div>} />
                </Routes>
            </div>
        </BrowserRouter>
        </CartProvider>
    )
}
export default AppRouter