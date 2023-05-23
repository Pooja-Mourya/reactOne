import React, { useEffect, useState } from 'react'
import Topbar from '../topbar/topbar'
// import { postMethod } from '../../service/Api'

function Home() {
  //   const [postData, setPostData] = useState([])
  //   const fetchFunction = async () => {
  //     let param = {}
  //     const data = await postMethod('/fetchPost', param, null)
  //     if (data) {
  //       console.log('data')
  //       setPostData(data)
  //     } else {
  //       console.log('no data')
  //     }
  //   }

  //   useEffect(async () => {
  //     const response = await fetch('http://localhost:8080/fetchPost')
  //     const jsonData = await response.json()
  //     console.log(jsonData)
  //   }, [])

  //   console.log('postData', postData)
  return (
    <section id="home" style={{ width: '100%', backgroundColor: 'blue' }}>
      <Topbar />
      <div style={{ padding: 50 }}>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img
                src="https://thumbs.dreamstime.com/b/cute-baby-13422650.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://images.unsplash.com/photo-1630304565761-d6f8d5a0facd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y3V0ZSUyMGJhYnl8ZW58MHx8MHx8&w=1000&q=80"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://media.istockphoto.com/id/1205387879/photo/authentic-portrait-of-4-months-baby-girl-wrapped-in-towel-after-bath.jpg?s=612x612&w=0&k=20&c=RLQ-G_09hax9YIokuSMxgqTADQReVIEQ-5DEapEU3Y0="
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
