import React from "react";
import logo from "../../images/logo.jpg";

const Footer = () => {
  return (
    <div className="bg-light mt-5">
      <div className="container">
        <footer className="py-5">
          <div className="row text-center">
            <div className="col-md-3 col-12">
              <img width="150px" height="60px" src={logo} alt="" />
              <p>
                There was a time when I wasn’t sure if I’d even be around to see
                this day.
              </p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <a href="/fb">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li className="ms-3">
                  <a href="/fb">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="ms-3">
                  <a href="/fb">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li className="ms-3">
                  <a href="/fb">
                    <i className="fab fa-instagram-square"></i>
                  </a>
                </li>
                <li className="ms-3">
                  <a href="/fb">
                    <i className="fab fa-pinterest-square"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-6">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="/home" className="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/home" className="nav-link p-0 text-muted">
                    Courses
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/home" className="nav-link p-0 text-muted">
                    Events
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/home" className="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/About" className="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-6">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="/home" className="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/home" className="nav-link p-0 text-muted">
                    Courses
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/home" className="nav-link p-0 text-muted">
                    Events
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/home" className="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/About" className="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-12 offset-1">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of whats new and exciting from us.</p>
                <div className="d-flex w-100 gap-2">
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  ></input>
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="text-center pt-3 border-top">
            <p>© 2021 Company, Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
