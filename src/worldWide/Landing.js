import React from 'react'
import Navbar from '../component/Navbar'
import WideNav from '../component/WideNav'
import myImg from '../assets/image/rmmlogo.jpg'
import ReactHookForm from '../reacthookform/ReactHookForm'

function Landing() {
  return (
    <>
      {/* <div className="card mb-2"></div>
      <div className="LandingContainer">
        <div className=" row ">
          <div className="col-sm-6 mb-3 mb-sm-0 ">
            <div className="p-5">
              <div className="card-body">
                <h5 className="card-title landingTitle">
                  Special title treatment
                </h5>
                <p className="card-text commonText">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-outline-primary">
                  Subscribe
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <img src={myImg} alt="image..." />
            </div>
          </div>
        </div>
      </div> */}
      <ReactHookForm />
    </>
  )
}

export default Landing
