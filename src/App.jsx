import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Button from './componentes/Button'
import Navbar from './componentes/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <main className='p-3 grid grid-cols-4'>
        <div className="flex flex-col items-start gap-3">
          <div className="w-50 h-60 bg-amber-300"></div>
          <p className="mt-3 text-xs text-gray-400">category</p>
          <p className="mt-1 text-base text-white">name</p>
          <p className="mt-1 text-sm text-amber-400">price</p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <div className="w-50 h-60 bg-amber-300"></div>
          <p className="mt-3 text-xs text-gray-400">category</p>
          <p className="mt-1 text-base text-white">name</p>
          <p className="mt-1 text-sm text-amber-400">price</p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <div className="w-50 h-60 bg-amber-300"></div>
          <p className="mt-3 text-xs text-gray-400">category</p>
          <p className="mt-1 text-base text-white">name</p>
          <p className="mt-1 text-sm text-amber-400">price</p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <div className="w-50 h-60 bg-amber-300"></div>
          <p className="mt-3 text-xs text-gray-400">category</p>
          <p className="mt-1 text-base text-white">name</p>
          <p className="mt-1 text-sm text-amber-400">price</p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <div className="w-50 h-60 bg-amber-300"></div>
          <p className="mt-3 text-xs text-gray-400">category</p>
          <p className="mt-1 text-base text-white">name</p>
          <p className="mt-1 text-sm text-amber-400">price</p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <div className="w-50 h-60 bg-amber-300"></div>
          <p className="mt-3 text-xs text-gray-400">category</p>
          <p className="mt-1 text-base text-white">name</p>
          <p className="mt-1 text-sm text-amber-400">price</p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <div className="w-50 h-60 bg-amber-300"></div>
          <p className="mt-3 text-xs text-gray-400">category</p>
          <p className="mt-1 text-base text-white">name</p>
          <p className="mt-1 text-sm text-amber-400">price</p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <div className="w-50 h-60 bg-amber-300"></div>
          <p className="mt-3 text-xs text-gray-400">category</p>
          <p className="mt-1 text-base text-white">name</p>
          <p className="mt-1 text-sm text-amber-400">price</p>
        </div>
      </main>
    </>
  )
}

export default App

// function App () {
//   return (
//   <div><Button/></div>
// )
// }