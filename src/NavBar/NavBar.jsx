import React from 'react'
import { Link } from 'react-router-dom'



const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
    <div className="container-fluid">
    <Link className="navbar-brand" to="/">BT-PROPS <i className="fa-solid fa-house-user"></i></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse cnt" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className='nav-links' to="/categoria/novedad" > Novedades </Link>
        </li>
        <li className="nav-item">
          <Link className='nav-links' to="/categoria/alquiler" > Alquilar </Link>
        </li>
        <li className="nav-item">
          <Link className='nav-links' to="/categoria/compra" > Comprar </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar