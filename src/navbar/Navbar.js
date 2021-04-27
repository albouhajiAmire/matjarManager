import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';
import Logo from '../images/logo/logo2.png';

function Navbar() {
    return (
        <>
            {/* <!-- ======= Header ======= --> */}
  <header className="site-navbar js-sticky-header site-navbar-target" role="banner">

    <div className="container">
      <div className="row align-items-center">

        <div className="col-6 col-lg-2">
          <h1 className="mb-0 site-logo"><a href="index.html" className="mb-0">
            <div>
              <img className="logo-img" src={Logo} alt="logo"/>
            </div>
            
          </a> </h1>
        </div>

        <div className="col-12 col-md-10 d-none d-lg-block">
          <nav className="site-navigation position-relative text-right" role="navigation">
            <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
              <Link className="nav-link"  to="/">Accueil</Link>
              <Link className="nav-link" to="/fonctionnalité">Fonctionnalités</Link>
              <Link className="nav-link" to="/tarif">Tarifs</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
              <Link className="btn-link" to="/connecter">Se Connecter</Link>
            </ul>
          </nav>
        </div>

        <div className="col-6 d-inline-block d-lg-none ml-md-0 py-3" style={{position: "relative", top: "3px"}}>

          <a href="#" className="burger site-menu-toggle js-menu-toggle" data-toggle="collapse" data-target="#main-navbar">
            <span></span>
          </a>
        </div>

      </div>
    </div>

  </header>

        </>
    )
}

export default Navbar
