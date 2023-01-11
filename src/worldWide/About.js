import React from 'react'
import myImg from '../assets/image/rmmlogo.jpg'

function About() {
  return (
    <>
      <div className="card mb-2"></div>
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
            <div className="">
              <img src={myImg} alt="image..." />
            </div>
          </div>
        </div>
      </div>
      <div className="LandingContainer">
        <div className=" row ">
          <div className="col-sm-6">
            <div className="">
              <img src={myImg} alt="image..." />
            </div>
          </div>
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
        </div>
      </div>
    </>
  )
}

export default About
