import React from 'react'

function Contact() {
  return (
    <section
      id="contact"
      style={{
        width: '100%',
        padding: 50,
        backgroundColor: 'tranperent',
        alignSelf: 'center',
        flex: 1,
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section m-5">Contact Form </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="wrapper">
              <div className="row no-gutters mb-5">
                <div className="col-md-7 ">
                  <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3 className="mb-4">Contact Us</h3>
                    <div id="form-message-warning" className="mb-4"></div>
                    <div id="form-message-success" className="mb-4">
                      Your message was sent, thank you!
                    </div>
                    <form
                      method="POST"
                      id="contactForm"
                      name="contactForm"
                      className="contactForm"
                      novalidate="novalidate"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="label" for="name">
                              Full Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              id="name"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="label" for="email">
                              Email Address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              id="email"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" for="subject">
                              Subject
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              id="subject"
                              placeholder="Subject"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" for="#">
                              Message
                            </label>
                            <textarea
                              name="message"
                              className="form-control"
                              id="message"
                              cols="30"
                              rows="4"
                              placeholder="Message"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12" style={{ marginTop: 20 }}>
                          <div className="form-group">
                            <input
                              type="submit"
                              value="Send Message"
                              className="btn btn-primary"
                            />
                            <div className="submitting"></div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="col-md-5 d-flex align-items-stretch card"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
