import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <main className="main1">
      <marquee behavior="alternate" direction="left"><h1>Welcome to Our Hospital</h1></marquee>
        <p>
          We are a leading healthcare provider in the area, offering a wide
          range of services for patients of all ages.
        </p>
      </main>
      
      <div className="about">

        <h2> About Us</h2>
        <p>  Information about the hospital, its history, mission, and values.</p>
      </div>
      <div className="services">


      <h2>Our Services</h2>
            <ul >
              <li>emergency care</li>
              <li> dental care</li>
              <li>cardio care</li>
            </ul>
      </div>
      <div className="doctors">
      <h2>Meet Our Doctors</h2>
            <ul className="care1">
              <li>faraz</li>
              <li>sufiyan</li>
              <li>tariq</li>
            </ul>
      </div>
      <div className="contact">
        <h2>Contact us</h2>
        <p> Contact information for the hospital, including address, phone
              number, and email.</p>

      </div>




      <footer>
        <div className="footer1">
          <p>Copyright © 2023 Hospital Name</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
