import React from 'react'

function Navbar() {
  return (
    <div className="row">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand fw-bold fs-4" href="#">
          COLLECTION
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="fddfdsfd"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="fdsffdsdf">
                Products
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="fdsffdsdf">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="fdsffdsdf">
                Contact
              </a>
            </li>
          </ul>
          
          <div className='buttons'>
            <a href="#" className="btn btn-outline-dark">
              <i className="fa fa-sign-in me-1"></i>Login</a>
              <a href="#" className="btn btn-outline-dark ms-2">
              <i className="fa fa-user-plus me-1"></i> Registrer</a>  
              
              <a href="#" className="btn btn-outline-dark ms-2">
              <img src="../icon/Vector.svg" ></img> Cart (0)</a>
          </div>

        </div>
      </div>
    </nav>
  </div>
  )
}


export default Navbar;