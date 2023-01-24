import "./navbar.css";

import React from "react";

function Navbar() {
  return (
    <div>
      <header>
        <div class="brand">
          <a href="#">AMBANI HOSPITAL</a>
        </div>

        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Features</a>
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
              <a href="#">Our Works</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
