import React from 'react'
import Auth from './screen/auth/Auth'
import About from './screen/about/About'
import Home from './screen/home/Home'
import Contact from './screen/contact/Contact'
import Bottom from './screen/bottom/Bottom'
import Navbar from './screen/topbar/Navbar'
import { Route, Routes } from 'react-router'
import First from './screen/form/First'
import { useSelector } from 'react-redux'
import ViewPost from './screen/home/ViewPost'
import UpdateBlog from './screen/form/UpdateBlog'
import Profile from './screen/auth/Profile'
import UserPost from './screen/auth/UserPost'

function App() {
  const isLogin = useSelector((state) => state.user.isLogin)
  //   console.log('isLogin', isLogin)
  return (
    <>
      <Navbar />
      {isLogin === false ? (
        <>
          {' '}
          <Home />
          <About />
          <Contact />
          <Auth />
          <Bottom />
        </>
      ) : (
        <Routes>
          <Route path="/create-post" element={<First />} />
          <Route path="/prime-posts" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/update-post" element={<UpdateBlog />} />
          <Route path="/user-profile" element={<Profile />} />
          <Route path="/user-post" element={<UserPost />} />
        </Routes>
      )}
      <Bottom />
    </>
  )
}

export default App
