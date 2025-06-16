import React from "react";
import "../style/ContactForm.css";

const ContactForm = () => {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2>
          Get in touch with us,<br />We're here to assist you.
        </h2>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number (optional)" />
          </div>
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit">Leave Us a Message</button>
        </form>
      </div>
     
    </section>
  );
};

export default ContactForm;
