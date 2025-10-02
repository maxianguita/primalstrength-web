import { 
  FaWhatsapp, 
  FaInstagram, 
  FaFacebookF, 
  FaRunning, 
  FaCalendarAlt, 
  FaDumbbell, 
  FaBolt, 
 
} from "react-icons/fa";

import LogoImg from "../assets/Logo.jpg"; 
import "./home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
     const navigate = useNavigate();
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
<button onClick={() => window.open("/planificaciones", "_blank")}>
  <FaCalendarAlt className="btn-icon" /> Planificaciones
</button>



  <button onClick={() => window.open("https://wa.me/5491144443751", "_blank")}>
    <FaWhatsapp className="btn-icon" /> Nuestro Whatsapp
  </button>
  


 <button 
  onClick={() => window.open("https://www.instagram.com/primalstrength.jh/", "_blank")}
>
  <FaInstagram className="btn-icon" /> Seguinos Instagram
</button>



  <button>
    <FaFacebookF className="btn-icon" />  Seguinos Facebook
  </button>
  <button>
    <FaRunning className="btn-icon" /> Transformate en atleta
  </button>
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
