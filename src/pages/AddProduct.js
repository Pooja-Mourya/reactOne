import React, { useState } from 'react'

function AddProduct() {
  const [file, setFile] = useState()
  function handleChange(e) {
    console.log(e.target.files)
    setFile(URL.createObjectURL(e.target.files[5]))
  }
  return (
    <div>
      <div className="container col-9 bg-light m-5 p-3 ">
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className=" row">
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
          </div>
          {/* <div className="App">
            <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            <img src={file} />
          </div> */}
          <div class="input-group mb-3">
            <label class="input-group-text">Upload</label>
            <input type="file" class="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct
