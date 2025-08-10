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
} from "lucide-react";
import "./App.css";

function App() {
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

export default App;
