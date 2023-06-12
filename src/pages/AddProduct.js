import React, { useState } from 'react'
// import axios from 'axios'

function AddProduct() {
  const [file, setFile] = useState()
  const [user, setUser] = useState('')

  const onChangeUser = (e) => {
    const { value } = e.target
    setUser(value)
    console.log(value)
  }

  const onChangeFile = (e) => {
    setFile(e.target.file[0])
    // console.log(e.target.file[0])
  }
  //   function handleChange(e) {
  //     console.log(e.target.files)
  //     setFile(URL.createObjectURL(e.target.files[5]))
  //   }

  const handleSubmit = (e) => {
    e.preventDefault()

    var formData = new FormData()

    // formData.append('image', file)
    // formData.append('user', user)

    // const config = {
    //   headers: {
    //     'content-type': 'multipart/form-data',
    //   },
    // }
    // axios.post('/upload', formData, config)
  }
  return (
    <div>
      <div className="container col-9 bg-light m-5 p-3 ">
        {/* <form> */}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            User Name
          </label>
          <input type="user" onChange={onChangeUser} className="form-control" />
        </div>
        {/* <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" />
          </div> */}
        {/* <div className=" row">
            <div className="mb-3 col-4">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="mb-3  col-4">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="mb-3  col-4">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" />
          </div> */}
        {/* <div className="App">
            <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            <img src={file} />
          </div> */}
        <div className="input-group mb-3">
          {/* <label className="input-group-text">Upload</label> */}
          <input type="file" onChange={onChangeFile} className="form-control" />
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
        {/* </form> */}
      </div>
    </div>
  )
}

export default AddProduct
