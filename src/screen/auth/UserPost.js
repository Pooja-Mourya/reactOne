import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserPost() {
  const [userData, setUserData] = useState([])
  const [firstPost, setFirstPost] = useState({})

  const userAllPostHandler = async (e, id) => {
    e.preventDefault()
    const allPost = await axios.get(`/userBlog/${id}`)
    setUserData(allPost?.data?.post?.user?.blogs)
    setFirstPost(allPost?.data?.post)
    // console.log('allPost', allPost?.data?.data?.post)
    // console.log('allPost1', allPost?.data?.data)
    // console.log('allPost2', allPost?.data)
    // console.log('allPost3', allPost)
    console.log('allPost4', allPost?.data?.post?.user?.blogs)
  }

  // useEffect(() => {
  //   userAllPostHandler()
  // }, [])
  return (
    <div>
      <h1>User Post</h1>

      <div className="container">
        <div className="card h-80 m-5 p-5">
          <img src={firstPost.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{firstPost.title}</h5>
            <p className="card-text">{firstPost.description}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
      {userData.map((item, index) => {
        // console.log('item', item._id)
        return (
          <div className="col" key={index}>
            <div className="card h-100">
              <span onClick={userAllPostHandler}>User Blog</span>
              <img src={item.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
              {/* <div className="text-center gap-3">
              
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
             
              </div> */}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default UserPost
