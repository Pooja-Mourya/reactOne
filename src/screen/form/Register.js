import React, { useState } from 'react'

function Register() {
  const [userInput, setUserInput] = useState({
    username: '',
    email: '',
    password: '',
  })
  const onChangeHandler = (e) => {
    // e.target.value
    console.log(e.target.value)
    setUserInput({ ...userInput, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('submit', e)
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          name="userName"
          placeholder="User name"
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          name="password"
          placeholder="Password"
          onChange={(e) => onChangeHandler(e)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Register
