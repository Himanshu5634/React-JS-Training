import { useState } from 'react'

import './App.css'
import Products from './Components/Products/Products'
import Cart from './Components/Cart/Cart'
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='container'>
    <Navbar />
    <Outlet />
   </div>
  )
}

export default App
