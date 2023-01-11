import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="  card p-5 m-5 col-sm-4 md-4 col-md-0">
          <form>
            <div className="mb-3">
              <select
                className="form-select mb-4"
                id="inputGroupSelect04"
                aria-label="Example select with button addon"
              >
                <option selected>Choose...</option>
                <option value="1">Buyer</option>
                <option value="2">Seller</option>
              </select>
              <label className="form-label">User Name</label>
              <input type="text" className="form-control" />

              <label className="form-label">Email address</label>
              <input type="email" className="form-control" />

              <label className="form-label">Create Password</label>
              <input type="password" className="form-control mb-4" />
              <label className="form-label">Confirm Create Password</label>
              <input type="password" className="form-control mb-4" />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <div className="">
              <Link to={'/login'}>if are you register user</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
