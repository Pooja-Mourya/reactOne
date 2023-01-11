import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Dashboard from './dashboard/Dashboard'
// import About from './pages/About'
// import Comments from './pages/Comments'
// import Home from './pages/Home'
// import Products from './pages/Products'
// import Nav from './component/Nav'
// import SideBar from './component/SideBar'
// import './App.css'
// import AddProduct from './pages/AddProduct'
// import Analytics from './pages/Analytics'
import Landing from './worldWide/Landing'
import RouteError from './component/RouteError'
import WorldProduct from './worldWide/WorldProduct'
import Services from './worldWide/Services'
import About from './worldWide/About'
import Contact from './worldWide/Contact'
import WideNav from './component/WideNav'
import Navbar from './component/Navbar'
import Login from './users/Login'
import Register from './users/Register'
import Forgot from './users/Forgot'
import SideBar from './component/SideBar'

function App() {
  return (
    <BrowserRouter>
      <WideNav />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<WorldProduct />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="*" element={<RouteError />} />
      </Routes>

      {/* <SideBar>
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="*" element={<RouteError />} />
        </Routes>
      </SideBar> */}
    </BrowserRouter>
  )
}

export default App
