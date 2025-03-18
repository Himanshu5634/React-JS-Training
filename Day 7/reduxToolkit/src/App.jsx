import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router'

function App() {


  return (
   <div className='container'>
    <Navbar />
    <Outlet />
   </div>
  )
}

export default App
