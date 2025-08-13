import React from "react";
import { Truck, Globe, Clock, Package, MapPin, Phone } from "lucide-react";
import "./ShippingDelivery.css";

const ShippingDelivery = () => {
  return (
    <div className="shipping-page">
      <div className="shipping-container">
        {/* Header */}
        <section className="shipping-header">
          <div className="header-icon">
            <Truck size={48} />
          </div>
          <h1 className="shipping-title">Shipping & Delivery Policy</h1>
          <p className="shipping-subtitle">Last updated on August 13, 2025</p>
        </section>

        {/* Content */}
        <div className="shipping-content">
          {/* Shipping Methods */}
          <section className="shipping-section">
            <h2 className="section-title">
              <Globe className="title-icon" />
              Shipping Methods
            </h2>
            <div className="section-content">
              <div className="shipping-methods">
                <div className="method-card international">
                  <div className="method-icon">
                    <Globe size={32} />
                  </div>
                  <h3>International Shipping</h3>
                  <p>
                    For International buyers, orders are shipped and delivered
                    through registered international courier companies and/or
                    International speed post only.
                  </p>
                  <div className="method-features">
                    <span className="feature">
                      ✓ Registered Courier Services
                    </span>
                    <span className="feature">✓ International Speed Post</span>
                    <span className="feature">✓ Tracking Available</span>
                  </div>
                </div>

                <div className="method-card domestic">
                  <div className="method-icon">
                    <MapPin size={32} />
                  </div>
                  <h3>Domestic Shipping</h3>
                  <p>
                    For domestic buyers, orders are shipped through registered
                    domestic courier companies and/or speed post only.
                  </p>
                  <div className="method-features">
                    <span className="feature">
                      ✓ Registered Domestic Courier
                    </span>
                    <span className="feature">✓ Speed Post Service</span>
                    <span className="feature">✓ Faster Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Delivery Timeline */}
          <section className="shipping-section">
            <h2 className="section-title">
              <Clock className="title-icon" />
              Delivery Timeline
            </h2>
            <div className="section-content">
              <div className="timeline-info">
                <div className="timeline-card">
                  <Package className="timeline-icon" />
                  <div className="timeline-details">
                    <h3>Processing Time</h3>
                    <p className="timeline-duration">0-7 Days</p>
                    <p className="timeline-description">
                      Orders are shipped within 0-7 days or as per the delivery
                      date agreed at the time of order confirmation.
                    </p>
                  </div>
                </div>

                <div className="timeline-note">
                  <h3>Important Note</h3>
                  <p>
                    Delivering of the shipment is subject to Courier Company /
                    post office norms. StackCart is not liable for any delay in
                    delivery by the courier company / postal authorities and
                    only guarantees to hand over the consignment to the courier
                    company or postal authorities within 0-7 days from the date
                    of the order and payment or as per the delivery date agreed
                    at the time of order confirmation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Delivery Information */}
          <section className="shipping-section">
            <h2 className="section-title">
              <MapPin className="title-icon" />
              Delivery Information
            </h2>
            <div className="section-content">
              <div className="delivery-info">
                <div className="info-card">
                  <h3>Delivery Address</h3>
                  <p>
                    Delivery of all orders will be to the address provided by
                    the buyer. Please ensure that the shipping address is
                    correct and complete to avoid any delivery delays.
                  </p>
                </div>

                <div className="info-card">
                  <h3>Service Confirmation</h3>
                  <p>
                    Delivery of our services will be confirmed on your mail ID
                    as specified during registration. You will receive email
                    notifications for order confirmation, shipping updates, and
                    delivery confirmation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Shipping Guidelines */}
          <section className="shipping-section">
            <h2 className="section-title">
              <Package className="title-icon" />
              Shipping Guidelines
            </h2>
            <div className="section-content">
              <div className="guidelines">
                <div className="guideline-item">
                  <h3>Address Accuracy</h3>
                  <p>
                    Please double-check your shipping address during checkout.
                    We are not responsible for packages sent to incorrect
                    addresses provided by customers.
                  </p>
                </div>

                <div className="guideline-item">
                  <h3>Courier Partner Dependency</h3>
                  <p>
                    Delivery times may vary based on courier partner schedules,
                    weather conditions, and other external factors beyond our
                    control.
                  </p>
                </div>

                <div className="guideline-item">
                  <h3>Order Tracking</h3>
                  <p>
                    Once your order is shipped, you will receive a tracking
                    number to monitor your package's delivery status.
                  </p>
                </div>

                <div className="guideline-item">
                  <h3>Delivery Attempts</h3>
                  <p>
                    Courier partners typically make 2-3 delivery attempts. If
                    unsuccessful, the package will be returned to our facility.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Support */}
          <section className="shipping-section contact-section">
            <h2 className="section-title">
              <Phone className="title-icon" />
              Need Help with Your Delivery?
            </h2>
            <div className="section-content">
              <p>
                For any issues in utilizing our services or questions about your
                delivery, you may contact our helpdesk:
              </p>
              <div className="contact-methods">
                <div className="contact-card">
                  <Phone className="contact-icon" />
                  <div className="contact-details">
                    <h3>Phone Support</h3>
                    <p className="contact-value">+91 928-991-6169</p>
                    <p className="contact-hours">Mon - Fri, 9 AM - 6 PM IST</p>
                  </div>
                </div>

                <div className="contact-card">
                  <Package className="contact-icon" />
                  <div className="contact-details">
                    <h3>Email Support</h3>
                    <p className="contact-value">support@stackcart.in</p>
                    <p className="contact-hours">24/7 Email Support</p>
                  </div>
                </div>
              </div>

              <div className="support-note">
                <p>
                  <strong>Quick Tip:</strong> Please have your order number
                  ready when contacting our support team for faster assistance.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShippingDelivery;
