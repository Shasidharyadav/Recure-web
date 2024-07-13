import React, { Component } from "react";
import emailjs from 'emailjs-com';

//react-icons imports
import { BiChevronDown } from "react-icons/bi";

class AppointmentForm extends Component {
  
  sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          alert('Message Sent Successfully');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message, please try again');
      });

    e.target.reset();
  }

  render() {
    return (
      <>
        <div className="appointment-form form-wraper">
          <h3 className="title">Book Appointment</h3>
          <form onSubmit={this.sendEmail}>
            <div className="form-group">
              <select className="form-select form-control" name="service" required>
                <option value="" disabled selected>Select a service</option>
                <option value="Musculoskeletal Physiotherapy">Musculoskeletal Physiotherapy</option>
                <option value="Neurological Physiotherapy">Neurological Physiotherapy</option>
                <option value="Sports Rehabilitation">Sports Rehabilitation</option>
                <option value="Women's Health Physiotherapy">Women's Health Physiotherapy</option>
                <option value="Geriatric Rehabilitation">Geriatric Rehabilitation</option>
                <option value="Telerehabilitation">Telerehabilitation</option>
                <option value="Ergonomic And Biomechanical Correction">Ergonomic And Biomechanical Correction</option>
                <option value="Palliative Care Physiotherapy">Palliative Care Physiotherapy</option>
                <option value="Physiotherapy At Home">Physiotherapy At Home</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                name="full_name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                name="email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                className="form-control"
                placeholder="Phone Numbers"
                name="phone"
                pattern="[0-9]{10}"
                required
              />
            </div>
            <div className="form-group">
              <input type="date" className="form-control" name="appointment_date" required />
            </div>
            <button type="submit" className="btn btn-secondary btn-lg">
              Appointment Now
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default AppointmentForm;
