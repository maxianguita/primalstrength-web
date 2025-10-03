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

const Home = () => {
  return (
    <div className="home-container">
      {/* Contenedor principal */}
      <div className="home-main">
        {/* Logo */}
        <img src={LogoImg} alt="Primal Strange Logo" className="home-logo" />

        {/* Título */}
        <h1 className="home-title">@primalstrength</h1>

        {/* Subtítulos */}
        <div className="home-subtitles">
          <span><FaDumbbell className="sub-icon" /> Centro de Salud y Fuerza</span>
          <span><FaBolt className="sub-icon" /> Powerlifting</span>
        </div>

        {/* Botones grid */}
        <div className="home-buttons">

          <a href="/#/plani" target="_blank" rel="noopener noreferrer">
            <FaCalendarAlt className="btn-icon" /> Planificaciones
          </a>

          <a href="https://wa.me/5491144443751" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="btn-icon" /> Nuestro Whatsapp
          </a>

          <a href="https://www.instagram.com/primalstrength.jh/" target="_blank" rel="noopener noreferrer">
         
          <FaInstagram className="btn-icon" /> Seguinos Instagram
         </a>

         

          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="btn-icon" /> Seguinos Facebook
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaRunning className="btn-icon" /> Transformate en atleta
          </a>
        </div>

        {/* Icono Instagram */}
        <a
          href="https://www.instagram.com/primalstrength.jh/"
          target="_blank"
          rel="noopener noreferrer"
          className="home-instagram"
        >
          <FaInstagram />
        </a>

        {/* Botón unir */}
        <button className="home-join">Únete a Primal Strange</button>
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
