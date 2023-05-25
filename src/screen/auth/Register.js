import React, { useState } from 'react'
import { newUser } from '../../service/Api'

function Register() {
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
  }
  return (
    <div>
      {' '}
      <form
        // action="/uploads"
        method="post"
        onSubmit={(e) => registration(e)}
      >
        <div className="row p-5">
          <div className="col-md-9">
            <div className="form-group">
              <label className="label">User Name</label>
              <input
                type="text"
                className="form-control"
                name="userName"
                placeholder="User Name"
                value={formData.userName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-9">
            <div className="form-group">
              <label className="label">Email Address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-9">
            <div className="form-group">
              <label className="label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <button className="btn btn-info mt-5" type="submit" value="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register
