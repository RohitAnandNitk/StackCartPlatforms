import { motion } from "framer-motion";
import {
  Globe,
  LinkedinIcon,
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
} from "lucide-react";
import "./App.css";
import { SiWhatsapp } from "react-icons/si";

function App() {
  return (
    <div className="container">
      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🚀 Welcome to StackCart
      </motion.h1>

      <motion.p
        className="subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Power your business with our cutting-edge commerce solutions. Connect.
        Sell. Grow.
      </motion.p>

      <motion.div
        className="card-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Card
          icon={<Globe size={32} />}
          title="Website"
          link="http://stackcart.in"
          className="website"
        />

        <Card
          icon={<LinkedinIcon size={32} />}
          title="LinkedIn"
          link="https://www.linkedin.com/company/stackcart-in/posts/?feedView=all&viewAsMember=true"
          className="linkedin"
        />

        <Card
          icon={<InstagramIcon size={32} />}
          title="Instagram"
          link="https://www.instagram.com/stackcart11/"
          className="instagram"
        />

        <Card
          icon={<FacebookIcon size={32} />}
          title="Facebook"
          link="https://www.facebook.com/people/StackCart/61572672278830/"
          className="facebook"
        />

        <Card
          icon={<YoutubeIcon size={32} />}
          title="YouTube"
          link="https://www.youtube.com/@StackCart_1411"
          className="youtube"
        />

        <Card
          icon={<SiWhatsapp size={32} />}
          title="WhatsApp"
          link="https://whatsapp.com/channel/0029VasVTHJLikgELcYtv405"
          className="whatsapp"
        />
      </motion.div>

      {/* <motion.div
        className="cta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <a href="#" className="button">
          Get Started
        </a>
      </motion.div> */}
    </div>
  );
}

const Card = ({ icon, title, link, className }) => (
  <motion.a
    whileHover={{ scale: 1.05 }}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`card ${className}`}
  >
    <div className="card-icon">{icon}</div>
    <h3 className="card-title">{title}</h3>
  </motion.a>
);

export default App;
