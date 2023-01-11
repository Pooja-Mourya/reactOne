import React from 'react'
import Media from '../component/Media'

function Contact() {
  return (
    <>
      <div className="card mb-2"></div>
      <div className="LandingContainer">
        <div className=" row ">
          <div className="col-sm-5 mb-3 mb-sm-0 ">
            <div className="p-5">
              <div className="card-body m-5">
                <h5 className="card-title landingTitle">Location</h5>
                <p className="card-text commonText">
                  With supporting text below as a natural lead-in
                </p>
                <p className="commonText">FOLLOW US</p>
                <Media />
                <p className="my-5">&#169; 2023 Privacy policy</p>
              </div>
            </div>
          </div>
          <div className="col-sm-5 p-5">
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    placeholder="type full name"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    placeholder="Enter correct email"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <input
                    type="text"
                    placeholder="Enter your massage"
                    className="form-control"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
