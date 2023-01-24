import React from 'react'
// import "./Home.css";

function Home() {
  return (
    <div>

     
      <main>
        <h1>Welcome to Our Hospital</h1>
        <p>We are a leading healthcare provider in the area, offering a wide range of services for patients of all ages.</p>
        
        
      </main> 
       <main>
      <div class="container">
        <section id="about">
          <h2>About Us</h2>
          <p>Information about the hospital, its history, mission, and values.</p>
        </section>
        <section id="services">
          <h2>Our Services</h2>
          <ul>
            <li>emergency care</li>
            <li> dental care</li>
            <li>cardio care</li>
          </ul>
        </section>
        <section id="doctors">
          <h2>Meet Our Doctors</h2>
          <ul>
            <li>faraz</li>
            <li>sufiyan</li>
            <li>tariq</li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <p>Contact information for the hospital, including address, phone number, and email.</p>
        </section>
      </div>
    </main>
    <footer>
      <div class="container">
        <p>Copyright © 2023 Hospital Name</p>
      </div>
    </footer>
      
    </div>
  )
}

export default Home
