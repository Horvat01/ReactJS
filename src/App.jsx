import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Button from './componentes/Button'
import Navbar from './componentes/Navbar'
import ProsuctsContainer from './componentes/ProductsContainer'
import ProductsContainerWithlog from './componentes/Productscontainerwithlog'
import CategoryBar from './componentes/CategoryBar'
import { BrowserRouter, Routes, Route } from "react-router";
// import ProductCard from './componentes/ProductCard'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='flex'>
        <CategoryBar />
        <Routes>
          <Route path="/" element={<ProductsContainerWithlog/>} />
          <Route path="/about" element={<div>about</div>} />
          <Route path="*" element={<div>Pagina no existente.</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
