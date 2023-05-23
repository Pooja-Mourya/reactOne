import React from 'react'
import './Topbar.css'

import slide1 from '../assets/img/slide1.jpg'
import slide2 from '../assets/img/slide2.jpg'
import slide3 from '../assets/img/slide3.jpg'

function Topbar() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={slide1}
              className="d-block w-100"
              style={{ width: '100%', height: 300 }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={slide2}
              className="d-block w-100"
              style={{ width: '100%', height: 300 }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={slide3}
              className="d-block w-100"
              style={{ width: '100%', height: 300 }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Topbar
