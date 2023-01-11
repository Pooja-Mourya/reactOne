import React, { useState } from 'react'
import {
  FaAd,
  FaDiscord,
  FaEdit,
  FaList,
  FaPlus,
  FaStreetView,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import pro from '../assets/image/rmmlogo.jpg'

function Products() {
  return (
    <div>
      <div>
        <h5 className="commonText">
          Products List
          <Link to="/addProduct">
            <FaPlus
              style={{
                backgroundColor: 'blue',
                marginLeft: 10,
                borderRadius: 20,
                color: 'white',
              }}
            />
          </Link>
        </h5>
      </div>
      <div className="card w-95 mb-3 m-2">
        <div className="row">
          <img
            src={pro}
            className="card-img-top m-2 col-sm-4 mb-3 mb-sm-0 ml-2"
            alt="..."
            style={{ width: 120, height: 125 }}
          />{' '}
          <div className="card-body col-sm-4 mb-3 mb-sm-0">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
          <div className="col-sm-4 mb-3 mb-sm-0 p-5">
            <button style={{ marginRight: 2 }}>
              <a href="#" className="btn btn-primary">
                <FaDiscord />
              </a>
            </button>

            <button style={{ marginRight: 2 }}>
              <a href="#" className="btn btn-primary">
                <FaEdit />
              </a>
            </button>
            <button style={{ marginRight: 2 }}>
              <a href="#" className="btn btn-primary">
                <FaStreetView />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
