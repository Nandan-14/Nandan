import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <header className="contact-header">📞 Contact Us</header>

      <div className="contact-container">
        {/* Contact Details */}
        <div className="contact-card glass-card">
          <h3 className="section-title">Contact Details</h3>
          <div className="detail-item"><MapPin className="icon" size={20} /><p>At post Valivade, Kolhapur</p></div>
          <div className="detail-item"><Phone className="icon" size={20} /><p>+91 9923767504</p></div>
          <div className="detail-item"><Mail className="icon" size={20} /><p>RideYourDestination@gmail.com</p></div>
          <div className="detail-item"><Clock className="icon" size={20} /><p>24×7 Customer Service</p></div>
        </div>

        {/* Contact Form */}
        <div className="contact-card glass-card">
          <h3 className="section-title">Contact Form</h3>
          <p className="subtitle">Whether you have questions or would just like to say hello, contact us.</p>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Phone Number" required />
            <textarea placeholder="Hi there, we would like to hear from you"></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </div>

        {/* Contact Map */}
        <div className="contact-card glass-card">
          <h3 className="section-title">Our Location</h3>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.548795377274!2d80.197034!3d13.0836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265de9ecdb8fb%3A0x1f9f81cf5c7d6c2d!2sRRK%20Fish%20Stall%20Annanagar!5e0!3m2!1sen!2sin!4v1692000000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
