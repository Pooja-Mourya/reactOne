import React from 'react'
import Login from './Login'
import Register from './Register'

function Auth() {
  return (
    <section
      id="auth"
      style={{
        width: '100%',
        padding: 50,
        backgroundColor: 'deepskyblue',
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section">User Credential Section</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="wrapper">
              <div className="row no-gutters mb-5">
                <div
                  className="col-md-5 d-flex align-items-stretch card"
                  style={{ paddingLeft: 20 }}
                >
                  <h4 className="heading-section text-center m-5">
                    Login form
                  </h4>
                  <Login />
                </div>

                <div className="col-md-7 ">
                  <div className="contact-wrap w-100 p-md-5 p-4">
                    <h4 className="mb-4">User registration form!</h4>
                    <Register />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Auth
