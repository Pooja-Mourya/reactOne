import React from 'react'
import Topbar from './screen/topbar/topbar'
import Auth from './screen/auth/Auth'
import About from './screen/about/About'
import Home from './screen/home/Home'
import Contact from './screen/contact/Contact'

function App() {
  return (
    <>
      <Topbar />
      <Home />
      <About />
      <Contact />
      <Auth />
    </>
  )
}

export default App
