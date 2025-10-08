import { FaCheckCircle, FaWhatsapp, FaInstagram, FaDownload, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../pages/Teams.css";

// 👇 asegurate que estos archivos existan EXACTAMENTE con esos nombres y extensión
import remera from "../assets/hermano.jpg";
import atleta from "../assets/atleta.jpg";
import gym1 from "../assets/gym1.jpg";
import banca from "../assets/gyms2.jpg";

export default function TeamJoin() {
  return (
    <section className="team-wrap">
      {/* Flecha volver */}
      <Link to="/" className="team-back">
        <FaArrowLeft />
      </Link>

      {/* HERO */}
      <header className="team-hero">
        <div className="team-hero__badge">Team Primal</div>
        <h1 className="team-hero__title">Sumate a nuestro team</h1>
        <p className="team-hero__sub">
          Representá la marca. Entrená con nosotros. Accedé a productos, descuentos
          y presencia en nuestras redes.
        </p>
        <div className="team-cta">
          <a className="btn btn--primary" href="https://wa.me/541138986902" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp style={{ marginRight: 8 }} /> Escribinos por WhatsApp
          </a>
          <a className="btn btn--outline" href="https://www.instagram.com/primalstrength.jh/" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={{ marginRight: 8 }} /> DM en Instagram
          </a>
          <a className="btn btn--ghost" href="/teams.pdf" download>
            <FaDownload style={{ marginRight: 8 }} /> Media Kit (PDF)
          </a>
        </div>
        <p className="team-hero__hint">Respondemos en 24–72 hs hábiles.</p>
      </header>

      {/* BENEFICIOS */}
      <section className="team-benefits">
        <div className="benefit">
          <FaCheckCircle className="benefit__icon" aria-hidden="true" />
          <div>
            <h3>Kit primalstrength</h3>
            <p>Remera over + Creatina.</p>
          </div>
        </div>
        <div className="benefit">
          <FaCheckCircle className="benefit__icon" aria-hidden="true" />
          <div>
            <h3>10% off permanente</h3>
            <p>Descuento exclusivo para vos y campañas con comisiones.</p>
          </div>
        </div>
        <div className="benefit">
          <FaCheckCircle className="benefit__icon" aria-hidden="true" />
          <div>
            <h3>Presencia en redes</h3>
            <p>Menciones en IG/TikTok y acceso anticipado a lanzamientos.</p>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="team-gallery" aria-label="Galería del team">
        {/* 👇 IMPORTANTE: había un error antes: faltaba un ESPACIO entre src y alt */}
        <img src={atleta} alt="Atleta en PrimalStrength entrenando peso muerto" />
        <img src={gym1} alt="Sesión de entrenamiento en gym con merch PrimalStrength" />
        <img src={remera} alt="Detalle de remera PrimalStrength, logo frontal" />
        <img src={banca} alt="Press banca con hoodie PrimalStrength" />
      </section>

      {/* PASOS + REQUISITOS */}
      <section className="team-steps">
        <div className="step">
          <div className="step__num">1</div>
          <div className="step__content">
            <h4>Mostrá tu estilo</h4>
            <p>Publicá contenido de training o lifestyle donde el merch sea protagonista.</p>
          </div>
        </div>
        <div className="step">
          <div className="step__num">2</div>
          <div className="step__content">
            <h4>Contactanos</h4>
            <p>Escribinos por WhatsApp o DM con tus redes y una breve bio (50–80 palabras).</p>
          </div>
        </div>
        <div className="step">
          <div className="step__num">3</div>
          <div className="step__content">
            <h4>Co-creamos</h4>
            <p>Si hay match, coordinamos kit de bienvenida, códigos de descuento y campañas.</p>
          </div>
        </div>
      </section>

      <section className="team-req">
        <h3>Requisitos</h3>
        <ul>
          <li>Mayor de 18 años.</li>
          <li>Perfil público en IG/TikTok o portfolio.</li>
          <li>+3 publicaciones mensuales (si creás contenido).</li>
          <li>2 fotos actuales + breve bio para perfil en la web.</li>
        </ul>
        <p className="muted">*Seleccionamos por afinidad con la marca, calidad de contenido y valores.</p>
      </section>

      {/* FAQ corto */}
      <section className="team-faq">
        <h3>Preguntas frecuentes</h3>
        <details>
          <summary>¿Hay pago además de productos?</summary>
          <p>Según campaña y alcance. Ofrecemos comisiones por ventas con tu código.</p>
        </details>
        <details>
          <summary>¿Qué pasa si no subo contenido todos los meses?</summary>
          <p>Buscamos constancia. Si bajás actividad, podemos pausar el programa y retomarlo cuando vuelvas.</p>
        </details>
        <details>
          <summary>¿Puedo postularme si recién empiezo?</summary>
          <p>Sí, valoramos la actitud y el fit con la marca tanto como el alcance.</p>
        </details>
      </section>
    </section>
  );
}
