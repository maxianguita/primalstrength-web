import { 
  FaWhatsapp, 
  FaInstagram, 
  FaDumbbell, 
  FaBolt,
  FaRunning, 
  FaCalendarAlt,
  FaShoppingBag 
} from "react-icons/fa";

import LogoImg from "../assets/Logo.jpg"; 
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {

  const handleWhatsApp = () => {
    const numero = "5491138986902";

    const texto = "Hola Primal! 👋 Quiero más info sobre sus productos y servicios";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="home-container">
      
      <div className="home-main">

        <img src={LogoImg} alt="Primal Strength Logo" className="home-logo" />

        <h1 className="home-title">@primalstrength</h1>

        <div className="home-subtitles">
          <span><FaDumbbell className="sub-icon" /> Zona de Bienestar y Salud</span>
          <span><FaBolt className="sub-icon" /> Powerlifting</span>
        </div>

        {/* 🔥 BOTONES */}
        <div className="home-buttons">

          <Link to="/plani" className="home-link">
            <FaCalendarAlt className="btn-icon" /> Planificaciones
          </Link>


         <Link to="/merch" className="home-link merch">
  <FaShoppingBag className="btn-icon merch-icon" /> 
  Comprar Merch
</Link>
          <a 
            href="https://www.instagram.com/primalstrength.jh/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaInstagram className="btn-icon" /> Seguinos Instagram
          </a>

          <Link to="/teams" className="home-link">
            <FaRunning className="btn-icon" /> Sumate a nuestro Team
          </Link>

        </div>

        {/* Instagram flotante */}
        <a
          href="https://www.instagram.com/primalstrength.jh/"
          target="_blank"
          rel="noopener noreferrer"
          className="home-instagram"
        >
          <FaInstagram />
        </a>

      </div>

      {/* 🔥 BOTÓN WHATSAPP FLOTANTE */}
      <button 
        onClick={handleWhatsApp} 
        className="whatsapp-float"
      >
        <FaWhatsapp />
      </button>

      <footer className="home-footer">
        <span>Cookies</span>
        <span>Report</span>
        <span>Privacy</span>
      </footer>

    </div>
  );
};

export default Home;