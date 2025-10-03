import "./plani.css";
import { FaDumbbell, FaChartLine, FaCalendarAlt, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Plani = () => {
  return (
    <div className="plani-container">
      <Link to="/" className="plani-back">
        <FaArrowLeft />
      </Link>

      <h1 className="plani-title">Planificaciones Powerlifting</h1>
      <p className="plani-sub">
        Entrená con una estructura organizada, progresiva y minimalista.
      </p>

      <div className="plani-grid">
        <div className="plani-card">
          <FaDumbbell className="plani-icon" />
          <h2>Fuerza Máxima</h2>
          <p>Rutinas de squat, bench y deadlift con progresión semanal.</p>
        </div>

        <div className="plani-card">
          <FaChartLine className="plani-icon" />
          <h2>Periodización</h2>
          <p>Ciclos diseñados para picos de fuerza en competencias.</p>
        </div>

        <div className="plani-card">
          <FaCalendarAlt className="plani-icon" />
          <h2>Seguimiento</h2>
          <p>Registro de cargas, volumen y repeticiones en cada sesión.</p>
        </div>
      </div>

      {/* Descarga directa */}
      <a
  href="/planificacion_powerlifting_full.pdf"
  download="planificacion_powerlifting_full.pdf"
  className="plani-btn"
>
  Descargar Planificación
</a>

    </div>
  );
};

export default Plani;
