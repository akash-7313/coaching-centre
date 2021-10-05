import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark text-white mt-5">
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-md-3 col-12 text-md-start text-center">
              <span className="name fs-1 text-center">
                <b className="text-warning">a</b>
                <b className="text-primary">lp</b>
                <b className="text-warning">ha</b>
                <b className="text-success">be</b>
                <b className="text-warning">t</b>
              </span>
              <p className="mt-1 text-secondary">
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
            <div className="col-md-2 col-6 text-center">
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
            <div className="col-md-2 col-6 text-center">
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
                <p className="text-secondary">
                  Monthly digest of whats new and <br /> exciting from us.
                </p>
                <div className="d-flex w-75 gap-1">
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  ></input>
                  <button className="btn btn-primary btn-sm" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="text-center mt-3 pt-3 border-top border-secondary">
            <p className="text-success">
              &#xA9; 2021 Company, Inc. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
