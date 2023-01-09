import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Dashboard from './dashboard/Dashboard'
import About from './pages/About'
import Analitycs from './pages/Analitycs'
import Comments from './pages/Comments'
import Home from './pages/Home'
import Products from './pages/Products'
import Nav from './component/Nav'
import SideBar from './component/SideBar'
import './App.css'
import AddProduct from './pages/AddProduct'

function App() {
  return (
    <BrowserRouter>
      <SideBar>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/analitycs" element={<Analitycs />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/addProduct" element={<AddProduct />} />
        </Routes>
      </SideBar>
    </BrowserRouter>
  )
}

export default App
