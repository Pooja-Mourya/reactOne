import React, { useState } from 'react'
import axios from 'axios'

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm_password: '',
    tc: '',
  })

  function handleChange(event) {
    setFormData({ [event.target.name]: event.target.value })
  }

  const registration = async () => {
    // await axios.post('localhost:8083/userRegistration', {})
    // await axios
    //   .post(`localhost:8080/userRegistration`, {
    //     firstName: formData.firstName,
    //     lastName: formData.lastName,
    //     email: formData.email,
    //     password: formData.password,
    //     confirm_password: formData.confirm_password,
    //     tc: formData.tc,
    //   })
    //   .then((response) => {
    //     console.log('Response:', response.data)
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error)
    //   })

    // const response = await fetch('localhost:3000/userRegistration')
    // const jsonData = await response.json()
    // console.log(jsonData)

    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      confirm_password: formData.confirm_password,
      tc: formData.tc,
      //   firstName: 'firstname',
      //   lastName: 'lastname',
      //   email: 'email',
      //   password: 'password',
      //   tc: 'tc',
    }

    console.log('local data', data)
    fetch('userRegistration', {
      method: 'POST',
      headers: {
        // 'Content-Type': 'application/json',
        // Add any other headers you need
      },

      body: JSON.stringify(data), // Replace 'data' with the actual data you want to send
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log('response data', data)
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error:', error)
      })
  }

  return (
    <div>
      {' '}
      <form
        // action="/uploads"
        method="post"
        enctype="multipart/form-data"
        onClick={registration}
      >
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className="label" for="name">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="label" for="email">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label className="label" for="subject">
                Email Address
              </label>
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
          <div className="col-md-12">
            <div className="form-group">
              <label className="label" for="subject">
                Password
              </label>
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
          <div className="col-md-12">
            <div className="form-group">
              <label className="label" for="subject">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Confirm Password"
                value={formData.confirm_password}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* <div className="col-md-10">
            <div className="form-group">
              <label className="label" for="name">
                Upload Your Photo
              </label>
              <input
                type="file"
                className="form-control"
                name="First Name"
                placeholder="First Name"
              />
            </div>
          </div>
          <div className="col-md-2">
            <div className="form-group">
              <button
                className="btn btn-primary "
                style={{ marginTop: 25 }}
                type="submit"
              >
                Upload
              </button>
            </div>
          </div> */}

          <div className="col-md-12 form-check m-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              name="tc"
              value={formData.tc}
              onChange={handleChange}
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out Check me out Check me out Check me out Check me out
              Check me out Check me out
            </label>
          </div>

          <div className="col-md-12" style={{ marginTop: 20 }}>
            <div className="form-group">
              <input
                type="new user registration"
                value="New User Registration"
                className="btn btn-primary"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register
