import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top transition-all" id="mainNav">
      <div className="container">
        <a className="navbar-brand fs-4" href="/">
          <span className="text-gold">&lt;</span>
          <span className="text-white">Parthiv</span>
          <span className="text-gold">/&gt;</span>
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon bg-gold"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="/#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#contact">
                Contact
              </a>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <a href="/#contact" className="btn btn-primary btn-sm hover-scale-up">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
