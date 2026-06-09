import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Button from './componentes/Button'

// function App () {
//   return (
//   <div><Button/></div>
// )
// }
function App() {
  return (
    <header className='flex justify-between p-3'>
      <input type="text" placeholder="buscar" />
      <h1>MueblesUY</h1>

      <nav>
        <a href="Cart">Cart</a>
        <a href="Shop">Shop</a>
      </nav>
    </header>
  )
}

export default App