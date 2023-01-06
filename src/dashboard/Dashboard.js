import React from 'react'
import Landing from './Landing'
import Nav from './Nav'
import Sidebar from './Sidebar'

function Dashboard() {
  return (
    <div>
      <p name={'pooja'}></p>
      <Nav />
      <Sidebar />
      <Landing />
    </div>
  )
}

export default Dashboard
