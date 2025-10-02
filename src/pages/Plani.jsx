import "./plani.css";
import { FaDumbbell, FaChartLine, FaCalendarAlt } from "react-icons/fa";

const Plani = () => {
  return (
    <div className="plani-container">
      <h1 className="plani-title">Planificaciones Powerlifting</h1>
      <p className="plani-sub">
        Entrená con una estructura organizada, progresiva y minimalista.
      </p>

      <div className="plani-grid">
        {/* Bloque 1 */}
        <div className="plani-card">
          <FaDumbbell className="plani-icon" />
          <h2>Fuerza Máxima</h2>
          <p>Rutinas de squat, bench y deadlift con progresión semanal.</p>
        </div>

        {/* Bloque 2 */}
        <div className="plani-card">
          <FaChartLine className="plani-icon" />
          <h2>Periodización</h2>
          <p>Ciclos diseñados para picos de fuerza en competencias.</p>
        </div>

        {/* Bloque 3 */}
        <div className="plani-card">
          <FaCalendarAlt className="plani-icon" />
          <h2>Seguimiento</h2>
          <p>Registro de cargas, volumen y repeticiones en cada sesión.</p>
        </div>
      </div>

      <button className="plani-btn">Descargar Planificación</button>
    </div>
  );
};

export default Plani;
