import { BrowserRouter, Routes, Route } from "react-router";
import CategoryBar from '../componentes/CategoryBar'
import ProsuctsContainer from '../componentes/ProductsContainer'
import Navbar from '../componentes/Navbar'
import ProductsContainerWithlog from '../componentes/Productscontainerwithlog'


function AppRouter() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className='flex'>
                <CategoryBar />
                <Routes>
                    <Route path="/" element={<ProductsContainerWithlog />} />
                    <Route path="/about" element={<div>about</div>} />
                    <Route path="/category/:categoryname" element={<ProsuctsContainer/>} />
                    <Route path="*" element={<div>Pagina no existente.</div>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default AppRouter