import React from 'react'
import ground from '../assets/img/aboutImg.jpg'

function About() {
  return (
    <section
      id="about"
      style={{ width: '100%', backgroundColor: 'transparent' }}
    >
      <div
        style={{
          minHeight: 500,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundImage: `url(${ground})`,
          paddingTop: 50,
        }}
      >
        <p
          style={{
            fontFamily: 'sans-serif',
            fontSize: 40,
            textAlign: 'center',
            marginTop: 100,
            fontWeight: 700,
          }}
        >
          About our company
        </p>
      </div>
      <div style={{ padding: 50 }}>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://fi-hatchbox-production-uploads.s3.amazonaws.com/posts/man-791049_1920.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
