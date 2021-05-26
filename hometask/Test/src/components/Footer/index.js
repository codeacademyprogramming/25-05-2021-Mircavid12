import React from 'react'
import Logo from "../../assests/Images/logos1.png"
export default function Footer() {
    return (
        <footer id="footer" className="m-0">
      <div className="content">
        <ul className="d-flex justify-content-between">
          <li><p>© classNameic Family Restaurant</p></li>
          <li className="footer-img"><img src={Logo} alt="" /></li>
          <li><p>Made with delight by harmuder</p></li>
        </ul>
      </div>
    </footer>
    )
}
