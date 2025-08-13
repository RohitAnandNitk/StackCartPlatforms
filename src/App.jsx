import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
          {/* Add other routes here as needed */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/shipping-delivery" element={<ShippingDelivery />} />
          <Route path="/cancellation-refund" element={<CancellationRefund />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
