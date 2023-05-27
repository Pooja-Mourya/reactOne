import React, { useEffect, useState } from 'react'
import { addPost, updatePost } from '../../service/Api'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function UpdateBlog() {
  const navigation = useNavigate()
  const [post, setPost] = useState({})

  const handleOnChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }
  const id = localStorage.getItem('@user')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()

    formData.append('title', post.title)
    formData.append('description', post.description)
    formData.append('image', post.image)
    await updatePost(formData)
    navigation('/prime-posts')
  }
  const handleImage = (e) => {
    setPost({ ...post, image: e.target.files[0] })
  }

  const postById = async () => {
    const getBlog = await axios.get(`/viewPost/${id}`)
    console.log('getBlog', getBlog)
    setPost({
      title: getBlog.title,
      description: getBlog.description,
      image: getBlog.image,
    })
  }

  useEffect(() => {
    postById()
  }, [id])

  //   console.log('formData', formData)
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center mb-5">
          <h2 className="heading-section m-5">Update Blog Post</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-7 ">
          <div className="contact-wrap w-100 p-md-5 p-4">
            <form
              action="POST"
              onSubmit={(e) => handleSubmit(e)}
              enctype="multipart/form-data"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="label">Post Image</label>
                    <input
                      type="file"
                      className="form-control"
                      name="image"
                      placeholder="post image"
                      onChange={handleImage}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      placeholder="title"
                      onChange={(e) => handleOnChange(e, 'title')}
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <label className="label">Description</label>
                    <textarea
                      name="description"
                      className="form-control"
                      cols="30"
                      rows="4"
                      placeholder="description"
                      onChange={(e) => handleOnChange(e, 'description')}
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12" style={{ marginTop: 20 }}>
                  <div className="form-group">
                    <button
                      type="submit"
                      value="submit"
                      className="btn btn-warning"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateBlog