
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppleStyleMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
      <div className="container-fluid">
        
        <a className="navbar-brand fw-bold" href="#">🍎 Racoon</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="mainNavbar">
          <ul className="navbar-nav">
            <li className="nav-item px-3">
              <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="#">Tienda</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="#">Extra</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppleStyleMenu;
