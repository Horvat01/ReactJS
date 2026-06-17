import { BrowserRouter, Routes, Route } from "react-router";
import CategoryBar from '../componentes/CategoryBar';
import ProductsContainer from '../componentes/ProductsContainer'; 
import Navbar from '../componentes/Navbar';
import ProductsContainerWithlog from '../componentes/Productscontainerwithlog'; 
import CartProvider from "../providers/CartProvider";
import Cart from "../componentes/Cart";
import Checkout from "../componentes/Checkout";
import Footer from "../componentes/Footer";
function AppRouter() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Navbar />
                <div className='flex'>
                    <CategoryBar />
                    <Routes>
                        <Route path="/" element={<ProductsContainerWithlog />} />
                        <Route path="/category/:categoryname" element={<ProductsContainer />} /> 
                        <Route path="/product/:id" element={<ProductDetailContainer />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="*" element={<div>Pagina no existente.</div>} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </CartProvider>
    );
}

export default AppRouter;