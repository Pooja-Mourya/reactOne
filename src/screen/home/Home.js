import React, { useEffect, useState } from 'react'
import Topbar from '../topbar/topbar'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Home() {
  const isLogin = useSelector((state) => state.user.isLogin)
  const userId = useSelector((state) => state?.data)
  console.log('userId', userId)
  const navigation = useNavigate()
  const [postData, setPostData] = useState([])
  const [pending, setPending] = useState(false)
  const [userData, setUserData] = useState([])

  const postDataFun = async (e) => {
    setPending(true)
    const response = await fetch('http://localhost:8080/fetchPost')
    const jsonData = await response.json()
    setPostData(jsonData.posts)
    setPending(false)
  }

  const handleDelete = async (id) => {
    console.log('id', id)
    await axios.delete('http://localhost:8080/deletePost/:' + id)
  }

  const id = localStorage.getItem('@user')

  console.log('localId', id)

  const userAllPostHandler = async () => {
    const allPost = await axios.get(`/userBlog/6470a31031abff23622533a1`)
    setUserData(allPost?.data?.post)
    console.log('allPost4', allPost?.data?.post)
  }

  useEffect(() => {
    postDataFun()
    userAllPostHandler()
  }, [])

  return (
    <section id="home" style={{ width: '100%', backgroundColor: 'blue' }}>
      <Topbar />
      <div style={{ padding: 50 }}>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {pending ?? <h1>Loading...</h1>}
          {postData.map((item, index) => {
            return (
              <div className="col" key={index}>
                <div className="card h-70">
                  <img src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </div>
                  <div className="text-center gap-3">
                    {isLogin === true && (
                      <div>
                        <small
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(item._id)}
                        >
                          ❎
                        </small>
                        <small
                          className="btn btn-sm btn-warning"
                          onClick={() => navigation('/update-post', item)}
                        >
                          📝
                        </small>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Home
