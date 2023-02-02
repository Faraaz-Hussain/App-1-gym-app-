import React, { useState } from "react";
import "./form.css"

const AppointmentForm = () => {
  const [appointment, setAppointment] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    symptoms: "",
  });

  const handleChange = (event) => {
    setAppointment({ ...appointment, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(appointment);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Online Appointment Form</h1>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={appointment.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={appointment.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            value={appointment.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            name="time"
            value={appointment.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="symptoms">Symptoms</label>
          <textarea
            name="symptoms"
            value={appointment.symptoms}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
