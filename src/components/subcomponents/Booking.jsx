import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

function Booking() {
    const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // For example, you can send form data to your server

    // After successful form submission, redirect to another page
    
    navigate("/Login");
  };
    return (
        <div className='bookingpage'>
        <div className="booking">
            <form id="booking-box" onSubmit={handleSubmit}></form>
            <form id="reservationForm" className="reservation-form">
                <div className="form-group">
                    <h1 className='hq'> Reserve Now</h1>
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" required />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="date" className="form-control" id="date" required />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Time</label>
                    <input type="time" className="form-control" id="time" required />
                </div>
                <div className="form-group">
                    <label htmlFor="guests">Number of Guests</label>
                    <input type="number" className="form-control" id="guests" placeholder="Enter number of guests" required />
                </div>
                <button type="submit" className="btn btn-primary">BOOK</button>
            </form>
        </div>
    </div>
    );
}

export default Booking;
