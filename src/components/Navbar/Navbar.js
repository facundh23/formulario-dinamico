import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  text-light navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Formulario Dinamico
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link active" aria-current="page" to='/home'>
              Formulario
            </NavLink>
            <NavLink className="nav-link" to='/resumen'>
              Vista
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
