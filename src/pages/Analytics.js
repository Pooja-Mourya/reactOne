import React from 'react'
import { FaBuyNLarge, FaReceipt, FaSellcast, FaUser } from 'react-icons/fa'

function Analytics() {
  return (
    <div className="m-2">
      <div className="row">
        <div className="col-sm-2 m-4 mb-sm-0 ">
          <a
            href="#"
            className="btn btn-outline-info"
            style={{ width: 250, height: 250, borderRadius: 150 }}
          >
            <span style={{ fontSize: 120 }}>
              <FaReceipt />
            </span>
          </a>
          <div class="card-body">
            <h5 class="card-text text-light" style={{ alignSelf: 'center' }}>
              Seller
            </h5>
          </div>
        </div>
        <div className="col-sm-2 m-4 mb-sm-0 ">
          <a
            href="#"
            className="btn btn-outline-danger"
            style={{ width: 250, height: 250, borderRadius: 150 }}
          >
            <span style={{ fontSize: 120 }}>
              <FaReceipt />
            </span>
          </a>
          <div class="card-body">
            <h5 class="card-title text-light"> Buyer</h5>
          </div>
        </div>
        <div className="col-sm-2 m-4 mb-sm-0 ">
          <a
            href="#"
            className="btn btn-outline-warning"
            style={{ width: 250, height: 250, borderRadius: 150 }}
          >
            <span style={{ fontSize: 120 }}>
              <FaReceipt />
            </span>
          </a>
          <div class="card-body">
            <h5 class="card-title text-light">Total Sale</h5>
          </div>
        </div>
        <div className="col-sm-2 m-4 mb-sm-0 ">
          <a
            href="#"
            className="btn btn-outline-light"
            style={{ width: 250, height: 250, borderRadius: 150 }}
          >
            <span style={{ fontSize: 120 }}>
              <FaReceipt />
            </span>
          </a>
          <div class="card-body">
            <h5 class="card-title text-light">Total Orders</h5>
          </div>
        </div>
      </div>

      <h1 style={{ color: 'white' }}>Analytics</h1>
    </div>
  )
}

export default Analytics
