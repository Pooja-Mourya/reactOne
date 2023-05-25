import React, { useState } from 'react'
import { newLogin } from '../../service/Api'

function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const handleOnChange = (e) => {
    setUser((event) => ({ ...event, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    newLogin({
      email: user.email,
      password: user.password,
    })
    console.log('submit')
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
