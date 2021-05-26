import React from 'react'
import Logo from '../../assests/Images/logos1.png';
export default function Header() {
    return (
        <header id="header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav navbar-left">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/"
                    >Payment</a
                  >
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/"
                    >About us</a
                  >
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/"
                    >Contacts</a
                  >
                </li>
              </ul>
              <a className="navbar-brand mx-auto navbar-center" href="/"
                ><img src={Logo} alt=""
              /></a>
              <ul className="navbar-nav navbar-right d-flex align-items-center">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#"
                    ><span></span> Daily 11am - 9pm</a
                  >
                </li>
                <li className="nav-item phone">
                  <i className="fas fa-phone-alt"></i>
                  <a className="nav-link active" aria-current="page" href="/"
                    ><img src="" alt="" /> 0 800 33 08 98</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
}
