import { 
  FaWhatsapp, 
  FaInstagram, 
  FaFacebookF, 
  FaRunning, 
  FaCalendarAlt, 
  FaDumbbell, 
  FaBolt 
} from "react-icons/fa";

import LogoImg from "../assets/Logo.jpg"; 
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      {/* Contenedor principal */}
      <div className="home-main">
        {/* Logo */}
        <img src={LogoImg} alt="Primal Strength Logo" className="home-logo" />

        {/* Título */}
        <h1 className="home-title">@primalstrength</h1>

        {/* Subtítulos */}
        <div className="home-subtitles">
          <span><FaDumbbell className="sub-icon" /> Zona de Carga</span>
          <span><FaBolt className="sub-icon" /> Powerlifting</span>
        </div>

        {/* Botones grid */}
        <div className="home-buttons">
          {/* Link interno a Planificaciones */}
          <Link to="/plani" className="home-link">
            <FaCalendarAlt className="btn-icon" /> Planificaciones
          </Link>

          {/* WhatsApp */}
          <a href="https://wa.me/541138986902" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="btn-icon" /> Nuestro Whatsapp
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/primalstrength.jh/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="btn-icon" /> Seguinos Instagram
          </a>

          {/* Facebook */}
          {/* <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="btn-icon" /> Seguinos Facebook
          </a> */}

          {/* Link interno a Teams */}
          <Link to="/teams" className="home-link">
            <FaRunning className="btn-icon" /> Sumate a nuestro Team
          </Link>
        </div>

        {/* Icono Instagram flotante */}
        <a
          href="https://www.instagram.com/primalstrength.jh/"
          target="_blank"
          rel="noopener noreferrer"
          className="home-instagram"
        >
          <FaInstagram />
        </a>

        {/* Botón unir */}
         
        <Link to="/merch" className="home-join">
           Comprar Merch
        </Link>
      </div>

      {/* Footer */}
      <footer className="home-footer">
        <span>Cookies</span>
        <span>Report</span>
        <span>Privacy</span>
      </footer>
    </div>
  );
};

export default Home;
