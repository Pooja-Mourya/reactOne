import React from 'react'
import '../about/About'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { userLogin, userLogout } from '../../redux/userSlice'

export default function Navbar() {
  const isLogin = useSelector((state) => state.user.isLogin)
  const dispatch = useDispatch()
  const navigation = useNavigate()

  const logoutFunction = (e) => {
    e.preventDefault()
    localStorage.removeItem('@user')
    dispatch(userLogin())
    alert('user logout successfully')
    navigation('/prime-posts')
  }

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark sticky-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {isLogin === false ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#auth">
                    Login
                  </a>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li> */}
                {/* {isLogin === false && <div></div>} */}
                <li className="nav-item">
                  <Link className="nav-link" to="/prime-posts">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                {isLogin === false ? (
                  <li className="nav-item">
                    <Link className="nav-link" to="/auth">
                      Login
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link className="nav-link" to="/create-post">
                      New Post
                    </Link>
                  </li>
                )}

                {isLogin === true && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/user-post">
                      User Blog
                    </Link>
                  </li>
                )}

                {/* {isLogin === false && (
                <li className="nav-item">
                  <Link className="nav-link" to="/prime-posts">
                    Home
                  </Link>
                </li>
              )} */}
              </ul>
            )}

            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}

            {isLogin === true && (
              <div>
                <div
                  onClick={logoutFunction}
                  className="btn btn-outline-danger"
                >
                  Logout
                </div>
                <span> </span>
                <div
                  onClick={() => navigation('/user-profile')}
                  className="btn btn-outline-info"
                >
                  Profile
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}
