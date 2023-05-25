import React, { useEffect, useState } from 'react'
import Topbar from '../topbar/topbar'
import { deletePost, postMethod } from '../../service/Api'
import axios from 'axios'

function Home() {
  const [postData, setPostData] = useState([])

  const postDataFun = async (e) => {
    // console.log('e', e.preventDefault())

    const response = await fetch('http://localhost:8080/fetchPost')
    const jsonData = await response.json()
    setPostData(jsonData.posts)
  }

  const handleDelete = async (id) => {
    // console.log('delete function')
    console.log('id', id)
    await axios.delete('http://localhost:8080/deletePost/:' + id)
  }

  useEffect(() => {
    postDataFun()
  }, [])

  return (
    <section id="home" style={{ width: '100%', backgroundColor: 'blue' }}>
      <Topbar />
      <div style={{ padding: 50 }}>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* <button onClick={() => postDataFun()}>Show</button> */}
          {postData.map((item, index) => {
            console.log('item', item._id)
            return (
              <div className="col" key={index}>
                <div className="card h-100">
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
                    <small
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(item._id)}
                    >
                      ❎
                    </small>
                    <small className="btn btn-sm btn-warning">📝</small>
                    <small className="btn btn-sm btn-info">👁️</small>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Home
