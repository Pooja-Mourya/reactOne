import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa'

function Media() {
  return (
    <>
      <div>
        <span style={{ marginRight: 10, color: 'green', fontSize: 25 }}>
          <FaWhatsapp />
        </span>
        <span style={{ marginRight: 10, color: 'red', fontSize: 25 }}>
          <FaYoutube />
        </span>
        <span style={{ marginRight: 10, color: 'deeppink', fontSize: 25 }}>
          <FaInstagram />
        </span>
        <span style={{ marginRight: 10, color: 'blue', fontSize: 25 }}>
          <FaFacebook />
        </span>
        <span style={{ marginRight: 10, color: 'deepskyblue', fontSize: 25 }}>
          <FaTwitter />
        </span>
      </div>
    </>
  )
}

export default Media
