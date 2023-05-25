import React from 'react'
import Auth from './screen/auth/Auth'
import About from './screen/about/About'
import Home from './screen/home/Home'
import Contact from './screen/contact/Contact'
import Bottom from './screen/bottom/Bottom'
import Navbar from './screen/topbar/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Auth />
      <Bottom />
    </>
  )
}

export default App
