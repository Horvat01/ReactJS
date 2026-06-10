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
// import ProductCard from './componentes/ProductCard'

function App() {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <CategoryBar/>
        <ProductsContainerWithlog />
      </div>

    </>
  )
}

export default App
