import React from 'react'

function Bottom() {
  return (
    <div
      style={{
        position: 'fixed',
        // marginVertical: 100,
        backgroundColor: 'black',
      }}
      className="fixed-bottom"
    >
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top sticky-bottom">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-light text-decoration-none lh-1"
          >
            {/* <svg className="bi" width="30" height="24">
              <use link:href="#bootstrap"></use>
            </svg> */}
          </a>
          <span className="text-light">© 2021 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-light" href="#">
              {/* <svg className="bi" width="24" height="24">
                <use link:href="#twitter"></use>
              </svg> */}
            </a>
          </li>
          <li className="ms-3">
            <a className="text-light" href="#">
              {/* <svg className="bi" width="24" height="24">
                <use link:href="#instagram"></use>
              </svg> */}
            </a>
          </li>
          <li className="ms-3">
            <a className="text-light" href="#">
              {/* <svg className="bi" width="24" height="24">
                <use link:href="#facebook"></use>
              </svg> */}
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Bottom
