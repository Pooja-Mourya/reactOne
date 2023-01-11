import React from 'react'
import { FaReceipt } from 'react-icons/fa'

function Services() {
  return (
    <div className="m-5">
      <div className="row w-100 d-flex justify-content-center">
        <div className="col-sm-2 m-4 mb-sm-0 ">
          <a
            href="#"
            className="btn btn-info"
            style={{ width: 250, height: 250, borderRadius: 150 }}
          >
            <span style={{ fontSize: 120 }}>
              <FaReceipt />
            </span>
          </a>
          <div className="card-body">
            <h5 className="card-text text-center">Seller</h5>
          </div>
        </div>
        <div className="col-sm-2 m-4 mb-sm-0 ">
          <a
            href="#"
            className="btn btn-danger"
            style={{ width: 250, height: 250, borderRadius: 150 }}
          >
            <span style={{ fontSize: 120 }}>
              <FaReceipt />
            </span>
          </a>
          <div className="card-body">
            <h5 className="card-title text-center"> Buyer</h5>
          </div>
        </div>
        <div className="col-sm-2 m-4 mb-sm-0 ">
          <a
            href="#"
            className="btn btn-warning"
            style={{ width: 250, height: 250, borderRadius: 150 }}
          >
            <span style={{ fontSize: 120 }}>
              <FaReceipt />
            </span>
          </a>
          <div className="card-body">
            <h5 className="card-title text-center">Total Sale</h5>
          </div>
        </div>
        <div className="col-sm-2 m-4 mb-sm-0 ">
          <a
            href="#"
            className="btn btn-dark"
            style={{ width: 250, height: 250, borderRadius: 150 }}
          >
            <span style={{ fontSize: 120 }}>
              <FaReceipt />
            </span>
          </a>
          <div className="card-body">
            <h5 className="card-title text-center">Total Orders</h5>
          </div>
        </div>
      </div>

      <h1 style={{ color: 'white' }}>Analytics</h1>
    </div>
  )
}

export default Services
