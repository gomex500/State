import React, { Component } from 'react';
import logo from '../img/logo.png'

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg nav1">
        <div className="container-fluid">

            <a className= " navbar-brand" href="/" >
              <img src={logo} className="logo" alt="logo" />
            </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="bi bi-border-width"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Ejercici1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ejercicio2">Ejercici2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ejercicio3">Ejercici3</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ejercicio4">Ejercici4</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ejercicio5">Ejercici5</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}