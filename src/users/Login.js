import React, { useState } from 'react'
import { json, Link, useNavigate } from 'react-router-dom'
import ApiMethods from '../apiService/ApiMethods'
import Constants from '../apiService/Constants'
import axios from 'axios'
import SideBar from '../component/SideBar'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const loginHandle = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await axios.post(
        'http://192.168.1.27:8000/api/user-login',
        {
          email: email,
          password: password,
        },
      )
      console.log(response)
      setEmail('')
      setPassword('')
      setLoading(false)
      navigate('/sidebar')
      //   return <SideBar />
    } catch (error) {
      console.error(error)
    }
  }
  if (loading) return <p>Loading...</p>
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="card p-5 m-5 col-sm-4 md-4 col-md-0">
          <form onSubmit={loginHandle}>
            <div className="mb-3">
              <select className="form-select mb-4">
                <option defaultValue>Choose...</option>
                <option defaultValue="1">Buyer</option>
                <option defaultValue="2">Seller</option>
              </select>
              <label className="form-label">Email address</label>
              <input
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
              />

              <label className="form-label">Password</label>
              <input
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control mb-4"
              />

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <div className="d-flex justify-content-between">
              <Link to={'/register'}>if are not you register user</Link>
              <Link to={'/forgot'}>Forgot Password</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
