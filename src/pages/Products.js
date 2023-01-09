import React, { useState } from 'react'
import { FaAd, FaList, FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

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
    </div>
  )
}

export default Products
