import React, { useState, useEffect } from "react";
import {
  Globe,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Star,
  Zap,
  TrendingUp,
  Users,
  ShoppingCart,
  Rocket,
  Award,
  Mail,
  Phone,
  MapPin,
  FileText,
  Shield,
  Truck,
  RotateCcw,
  Info,
  Heart,
} from "lucide-react";
import "./Home.css";

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsLoaded(true);

    // Generate floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1,
    }));
    setParticles(newParticles);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const socialLinks = [
    {
      icon: Globe,
      title: "Website",
      link: "http://stackcart.in",
      className: "website",
      description: "Explore our main hub",
    },
    {
      icon: Award,
      title: "Certificate Validation",
      link: "https://stackcart-certify.vercel.app/",
      className: "certificate",
      description: "Verify work credentials",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      link: "https://www.linkedin.com/company/stackcart-in/posts/?feedView=all&viewAsMember=true",
      className: "linkedin",
      description: "Professional network",
    },
    {
      icon: Instagram,
      title: "Instagram",
      link: "https://www.instagram.com/stackcart11/",
      className: "instagram",
      description: "Visual storytelling",
    },
    {
      icon: Facebook,
      title: "Facebook",
      link: "https://www.facebook.com/people/StackCart/61572672278830/",
      className: "facebook",
      description: "Community updates",
    },
    {
      icon: Youtube,
      title: "YouTube",
      link: "https://www.youtube.com/@StackCart_1411",
      className: "youtube",
      description: "Video content",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      link: "https://whatsapp.com/channel/0029VasVTHJLikgELcYtv405",
      className: "whatsapp",
      description: "Direct messaging",
    },
  ];

  const stats = [
    { icon: Users, value: "10K+", label: "Active Users" },
    { icon: ShoppingCart, value: "50K+", label: "Transactions" },
    { icon: TrendingUp, value: "99%", label: "Uptime" },
    { icon: Star, value: "4.9", label: "Rating" },
  ];

  return (
    <div className="app-container">
      {/* Animated Background */}
      <div className="background-overlay">
        <div
          className="mouse-gradient"
          style={{
            transform: `translate(${mousePosition.x * 50}px, ${
              mousePosition.y * 50
            }px)`,
          }}
        />
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDuration: `${particle.speed + 3}s`,
          }}
        />
      ))}

      <div className="main-content">
        {/* Header Section */}
        <div className={`header-section ${isLoaded ? "loaded" : ""}`}>
          <div className="rocket-container">
            <div className="rocket-wrapper">
              <Rocket className="rocket-icon" />
              <div className="sparkles-wrapper">
                <Sparkles className="sparkles-icon" />
              </div>
            </div>
          </div>

          <h1 className="main-title">Welcome to StackCart</h1>

          <p className="main-subtitle">
            Power your business with our cutting-edge commerce solutions.
            <span className="highlight-text"> Connect. Sell. Grow.</span>
          </p>

          {/* Interactive Stats */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`stat-card ${isLoaded ? "loaded" : ""}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <stat.icon className="stat-icon" />
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Cards Grid */}
        <div className="cards-grid">
          {socialLinks.map((social, index) => (
            <SocialCard
              key={index}
              {...social}
              index={index}
              isLoaded={isLoaded}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className={`cta-section ${isLoaded ? "loaded" : ""}`}>
          <button className="cta-button">
            Start Your Journey
            <ArrowRight className="cta-arrow" />
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section">
              <div className="footer-logo">
                <Rocket className="footer-logo-icon" />
                <h3 className="footer-brand">StackCart</h3>
              </div>
              <p className="footer-description">
                Empowering businesses with cutting-edge commerce solutions.
                Building the future of digital commerce, one innovation at a
                time.
              </p>
              <div className="footer-social">
                <a
                  href="https://www.linkedin.com/company/stackcart-in"
                  className="footer-social-link linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://www.instagram.com/stackcart11/"
                  className="footer-social-link instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.facebook.com/people/StackCart/61572672278830/"
                  className="footer-social-link facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.youtube.com/@StackCart_1411"
                  className="footer-social-link youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li>
                  <a href="/about" className="footer-link">
                    <Info size={16} />
                    <span>About Us</span>
                  </a>
                </li>
                <li>
                  <a href="/contact" className="footer-link">
                    <Mail size={16} />
                    <span>Contact Us</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackcart-certify.vercel.app/"
                    className="footer-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Award size={16} />
                    <span>Certificate Validation</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div className="footer-section">
              <h4 className="footer-heading">Legal & Policies</h4>
              <ul className="footer-links">
                <li>
                  <a href="/terms-conditions" className="footer-link">
                    <FileText size={16} />
                    <span>Terms & Conditions</span>
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="footer-link">
                    <Shield size={16} />
                    <span>Privacy Policy</span>
                  </a>
                </li>
                <li>
                  <a href="/shipping-delivery" className="footer-link">
                    <Truck size={16} />
                    <span>Shipping & Delivery</span>
                  </a>
                </li>
                <li>
                  <a href="/cancellation-refund" className="footer-link">
                    <RotateCcw size={16} />
                    <span>Cancellation & Refund</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4 className="footer-heading">Get in Touch</h4>
              <div className="footer-contact">
                <div className="footer-contact-item">
                  <Mail size={16} />
                  <span>info@stackcart.in</span>
                </div>
                <div className="footer-contact-item">
                  <Phone size={16} />
                  <span>+91-9289916169</span>
                </div>
                <div className="footer-contact-item">
                  <MapPin size={16} />
                  <span>Rohini, New Delhi, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="footer-bottom-content">
              <p className="footer-copyright">
                © 2024 StackCart. All rights reserved.
              </p>
              <p className="footer-love">
                Made with <Heart size={16} className="heart-icon" /> in India
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const SocialCard = ({
  icon: Icon,
  title,
  link,
  className,
  description,
  index,
  isLoaded,
  activeCard,
  setActiveCard,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`social-card-link ${isLoaded ? "loaded" : ""}`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => {
        setIsHovered(true);
        setActiveCard(index);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveCard(null);
      }}
    >
      <div
        className={`social-card ${className} ${
          activeCard === index ? "active" : ""
        }`}
      >
        {/* Animated border effect */}
        <div className="card-border-effect" />

        <div className="card-content">
          {/* Floating icon with glow effect */}
          <div className="icon-container">
            <div className={`icon-wrapper ${isHovered ? "hovered" : ""}`}>
              <Icon
                className={`card-icon ${isHovered ? "icon-hovered" : ""}`}
              />
            </div>
            {isHovered && <div className="icon-glow" />}
          </div>

          {/* Content */}
          <h3 className="card-title">{title}</h3>

          <p
            className={`card-description ${
              isHovered ? "description-hovered" : ""
            }`}
          >
            {description}
          </p>

          {/* Interactive elements */}
          <div className={`card-footer ${isHovered ? "footer-hovered" : ""}`}>
            <span className="connect-text">Connect</span>
            <ArrowRight
              className={`arrow-icon ${isHovered ? "arrow-hovered" : ""}`}
            />
          </div>

          {/* Hover overlay */}
          <div className="hover-overlay" />
        </div>

        {/* Pulse effect on active card */}
        {activeCard === index && <div className="pulse-effect" />}
      </div>
    </a>
  );
};

export default Home;
