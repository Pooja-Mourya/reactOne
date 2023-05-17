import React from 'react'

function Auth() {
  return (
    <section
      id="signup"
      style={{ width: '100%', height: 500, backgroundColor: 'cyan' }}
    >
      <div
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          //   padding: 50,
        }}
      >
        <form>
          <div className="mb-3 col-6">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3 col-6">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Auth
