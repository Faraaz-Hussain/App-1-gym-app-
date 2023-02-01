import "./navbar.css";

import React from "react";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div>
      <header>
        <div class="brand">
          <img src="https://www.freepnglogos.com/uploads/medical-logo-png-28.png" alt="logo" />
          <a href="#">AMBANI HOSPITAL</a>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="login">Login</Link>
            </li>
            <li>
              <select>
                <option value="option1">Services</option>
                <option value="option2">Emergency Care</option>
                <option value="option3">Dental care</option>
                <option value="option4">Cardio care</option>
              </select>
            </li>
            <li>
              <Link to="work">Our Works</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
