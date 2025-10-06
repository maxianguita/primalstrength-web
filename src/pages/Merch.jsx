// src/pages/Merch.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./merch.css";
import products from "../../public/data/Products.json"; 

// Utilidad: formatear moneda
function money(n, currency = "ARS") {
  if (typeof n !== "number") return "-";
  try {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(n);
  } catch {
    return `${n} ${currency}`;
  }
}

// Card: imagen + título + precio
function Card({ product }) {
  const { image, name, price, currency } = product || {};
  return (
    <article className="card">
      <div className="card__media">
        {image ? (
          <img className="card__img" src={image} alt={name || "Producto"} loading="lazy" />
        ) : (
          <div className="card__placeholder">Sin imagen</div>
        )}
      </div>
      <div className="card__body">
        <h3 className="card__title">{name || "Producto"}</h3>
        <div className="card__price">{money(price, currency || "ARS")}</div>
      </div>
    </article>
  );
}

export default function Merch({ items }) {
  const list = Array.isArray(items) ? items : products;

  return (
    <div className="merch">
      <header className="merch__header">
        <div className="merch__left">
          <Link to="/" className="merch__back" aria-label="Volver al Home" title="Volver">
            {/* Flecha (SVG) */}
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <h1 className="merch__title">Merch</h1>
        </div>
        <span className="merch__count">{list.length} items</span>
      </header>

      <main className="merch__main">
        {list.length === 0 && <div className="merch__empty">Aún no hay productos para mostrar.</div>}

        <section className="merch__grid">
          {list.map((p) => (
            <Card key={p.id ?? p.image} product={p} />
          ))}
        </section>
      </main>

      <footer className="merch__footer">
        <small>© {new Date().getFullYear()} Tu Marca</small>
      </footer>
    </div>
  );
}
