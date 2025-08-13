import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Header */}
        <section className="contact-header">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </section>

        {/* Contact Content */}
        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <h2 className="info-title">Contact Information</h2>
            <p className="info-description">
              Reach out to us through any of the following channels:
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <Mail />
                </div>
                <div className="method-details">
                  <h3>Email Us</h3>
                  <p>support@stackcart.in</p>
                  <small>We'll respond within 24 hours</small>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <Phone />
                </div>
                <div className="method-details">
                  <h3>Call Us</h3>
                  <p>+91 928-991-6169</p>
                  <small>Mon - Fri, 9 AM - 6 PM IST</small>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <MapPin />
                </div>
                <div className="method-details">
                  <h3>Visit Us</h3>
                  <p>Plot No.21 The Greenview Apartment</p>
                  <p>Near Pratap Park Sector-5 Rohini</p>
                  <p>New Delhi-110085, India</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <Clock />
                </div>
                <div className="method-details">
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <small>Closed on Sundays and holidays</small>
                </div>
              </div>
            </div>

            {/* Registered Address */}
            <div className="registered-address">
              <h3>Registered Address</h3>
              <p>
                F/F, H-C.56, HASTSHAL VIHAR, UTTAM NAGAR,
                <br />
                MADAN GENERAL STORE, WEST DELHI,
                <br />
                New Delhi, West Delhi, Delhi, 110059
                <br />
                Uttam Nagar DELHI 110059
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <h2 className="form-title">Send us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <section className="contact-additional">
          <div className="additional-card">
            <MessageCircle className="additional-icon" />
            <h3>Quick Response</h3>
            <p>
              For urgent matters, please call us directly at +91 928-991-6169.
              We aim to respond to all inquiries within 24 hours.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
