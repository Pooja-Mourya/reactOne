import React, { useState } from 'react'
import { newUser } from '../../service/Api'
import { useNavigate } from 'react-router-dom'
import Home from '../home/Home'

function Register() {
  const navigation = useNavigate()
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
  })

  function handleChange(event) {
    setFormData((e) => ({ ...e, [event.target.name]: event.target.value }))
  }

  const registration = async (e) => {
    e.preventDefault()
    const data = {
      userName: formData.userName,
      email: formData.email,
      password: formData.password,
    }
    // console.log('data', data)
    await newUser(data)
    alert('user register successfully')
    return <Home />
  }
  return (
    <div>
      {' '}
      <form
        // action="/uploads"
        method="post"
        onSubmit={registration}
      >
        <div className="col-12">
          <label className="form-label">User Name</label>
          <input
            type="text"
            className="form-control"
            name="userName"
            placeholder="User Name"
            value={formData.userName}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label className="from-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-info mt-5" type="submit" value="submit">
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
