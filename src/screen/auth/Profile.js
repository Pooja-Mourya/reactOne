import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
  const local = localStorage.getItem('@user')
  const reduxUser = useSelector((state) => state.user)

  console.log('reduxUser', reduxUser)
  return (
    <div>
      <h1>{local}</h1>
    </div>
  )
}

export default Profile
