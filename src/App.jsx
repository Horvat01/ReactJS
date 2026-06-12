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
import AppRouter from './AppRouter/AppRouter'

function App() {
  return <AppRouter />
}
export default App
