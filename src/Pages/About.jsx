import React from "react";
import { Rocket, Target, Users, Award, Globe, Zap } from "lucide-react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <div className="about-logo">
              <Rocket className="about-logo-icon" />
              <h1 className="about-brand">StackCart</h1>
            </div>
            <h2 className="about-tagline">
              Empowering businesses with cutting-edge commerce solutions
            </h2>
            <p className="about-description">
              Building the future of digital commerce, one innovation at a time.
              We transform how businesses connect with their customers through
              powerful, scalable, and intelligent e-commerce platforms.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="about-mission">
          <div className="mission-grid">
            <div className="mission-card">
              <Target className="mission-icon" />
              <h3>Our Mission</h3>
              <p>
                To democratize e-commerce by providing businesses of all sizes
                with enterprise-grade solutions that are accessible, affordable,
                and easy to implement.
              </p>
            </div>
            <div className="mission-card">
              <Globe className="mission-icon" />
              <h3>Our Vision</h3>
              <p>
                To become the leading platform that bridges the gap between
                traditional commerce and digital transformation, enabling
                businesses to thrive in the digital economy.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="about-values">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <Zap className="value-icon" />
              <h4>Innovation</h4>
              <p>
                Continuously pushing boundaries to deliver cutting-edge
                solutions
              </p>
            </div>
            <div className="value-card">
              <Users className="value-icon" />
              <h4>Customer First</h4>
              <p>
                Putting our customers' success at the center of everything we do
              </p>
            </div>
            <div className="value-card">
              <Award className="value-icon" />
              <h4>Excellence</h4>
              <p>
                Maintaining the highest standards in product quality and service
              </p>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="about-info">
          <h2 className="section-title">Company Information</h2>
          <div className="info-content">
            <div className="info-card">
              <h3>Legal Entity</h3>
              <p>StackCart</p>
            </div>
            <div className="info-card">
              <h3>Registered Office</h3>
              <p>
                F/F, H-C.56, HASTSHAL VIHAR, UTTAM NAGAR, MADAN GENERAL STORE,
                WEST DELHI, New Delhi, West Delhi, Delhi, 110059 Uttam Nagar
                DELHI 110059
              </p>
            </div>
            <div className="info-card">
              <h3>Operational Office</h3>
              <p>
                Plot No.21 The Greenview Apartment Near Pratap Park Sector-5
                Rohini, New Delhi-110085. North West Delhi DELHI 110085
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
