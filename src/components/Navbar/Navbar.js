import React from 'react'
const Navbar = () => {
  return (
    <div>
        <div className='logo'>
            <h3 className='ms-3 text-white'>envatomarket</h3>
            <button className='btn  me-3'>Buy Now</button>
        </div>
        <div className="container">
            <div className="row my-3">
                <div className="col-md-6">
                    <img src="assets/images/logo-1.png" alt="" className='logo-img' />
                </div>
                <div className="col-md-3">
                    <h6>Call Us Now</h6>
                    <span>03001234567</span>
                </div>
                <div className="col-md-3">
                <h6>Opening hour</h6>
                <span>Mon-Sat 9:00-19:00</span>
                </div>
            </div>
        </div>
      <nav className="navbar navbar-expand-lg top-sticky ">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact US</a>
        </li>
      </ul>
      <form className="d-flex">
      <i class='bx bx-check'></i>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
