import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa"; // ✅ WhatsApp icon
import "./App.css";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import TermsConditions from "./Pages/TermsConditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ShippingDelivery from "./Pages/ShippingDelivery";
import CancellationRefund from "./Pages/CancellationRefund";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/shipping-delivery" element={<ShippingDelivery />} />
          <Route path="/cancellation-refund" element={<CancellationRefund />} />
        </Routes>

        {/* Floating WhatsApp Button with Tooltip */}
        <div className="whatsapp-container">
          <a
            href="https://wa.me/9289916169"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
          >
            <FaWhatsapp size={28} />
          </a>
          <span className="whatsapp-tooltip">Chat with us on WhatsApp</span>
        </div>
      </div>
    </Router>
  );
}

export default App;
