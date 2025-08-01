import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top shadow-sm py-3 animate__animated animate__fadeIn" data-wow-delay="0.1s">
      <div className="container">
        {/* Logo - visible on all devices */}
        <a href="index.html" className="navbar-brand fw-bold">
          GURUKRUPA WELDING WORKS
        </a>
        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link active" href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="service.html">Services</a>
            </li>

            {/* Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="pagesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
                <li><a className="dropdown-item" href="feature.html">Features</a></li>
                <li><a className="dropdown-item" href="team.html">Our Team</a></li>
                <li><a className="dropdown-item" href="testimonial.html">Testimonial</a></li>
                <li><a className="dropdown-item" href="appoinment.html">Appointment</a></li>
                <li><a className="dropdown-item" href="404.html">404 Page</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="contact.html">Contact</a>
            </li>
          </ul>
          {/* Get A Quote button only on lg+ */}
          <div className="ms-lg-3 d-none d-lg-block">
            <a href="#" className="btn btn-primary px-4 py-2 rounded-pill shadow-sm nav-quote-btn">
              Get A Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
