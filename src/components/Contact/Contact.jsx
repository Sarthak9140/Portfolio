// components/ContactMe/ContactMe.jsx
import React from 'react';
import './Contact.scss';
import { FaUser, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <div className="contact-container">
      <div className="contact-title">
        <FaUser className="icon" />
        <h1>Contact Me</h1>
      </div>

      <div className="contact-content">
        {/* Left Contact Info */}
        <div className="contact-info">
          <p><FaEnvelope className="icon" /> sarthaksinghsps.23@gmail.com</p>
          <p><FaPhoneAlt className="icon" /> +91 9140713919</p>
          <p><FaMapMarkerAlt className="icon" /> Lucknow</p>
        </div>

        {/* Right Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit">
            SUBMIT <FaPaperPlane className="icon" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
