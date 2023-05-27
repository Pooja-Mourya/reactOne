import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { userLogin } from '../../redux/userSlice'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const handleOnChange = (e) => {
    setUser((event) => ({ ...event, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const login = {
      email: user.email,
      password: user.password,
    }
    const result = await axios.post('/userLogin', login)
    alert('user login successfully')
    localStorage.setItem('@user', result?.data?.user?._id)
    dispatch(userLogin())
    navigation('prime-posts')
  }

  return (
    <div>
      <form action="post" onSubmit={(e) => handleSubmit(e)}>
        <div className="col-9">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleOnChange}
          />
        </div>
        <div className="col-9 ">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleOnChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-5 mt-5">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
