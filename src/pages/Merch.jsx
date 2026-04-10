import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./merch.css";
import products from "../../public/data/Products.json";
import Carousel from "./components/Carousel";

function money(n, currency = "ARS") {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(n || 0);
}

const normalize = (v) => String(v ?? "").toLowerCase();

function Card({ product }) {
  const handleWhatsApp = () => {
    const numero = "5491144443751";
    const texto = `Hola Primal! 👋\nQuiero comprar:\n\n🛍️ ${product.name}\n💰 ${money(product.price, product.currency)}\n\n¿Tenés stock?`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <article className="card">
      <div className="card__media">
        <img
          className="card__img"
          src={product.image}
          alt={product.name}
          onError={(e) => (e.target.src = "https://via.placeholder.com/400x400?text=Producto")}
        />
        <div className="card__priceBadge">{money(product.price, product.currency)}</div>
      </div>
      <div className="card__body">
        <div>
          <h3 className="card__title">{product.name}</h3>
          <span className="card__price">{money(product.price, product.currency)}</span>
        </div>
        <button onClick={handleWhatsApp} className="card__btn whatsapp">
          Comprar por WhatsApp
        </button>
      </div>
    </article>
  );
}

export default function Merch() {
  const [category, setCategory] = useState("todos");
  const [sort, setSort] = useState("name_asc");
  const [showFilters, setShowFilters] = useState(false);

  const filteredItems = useMemo(() => {
    let result = [...products];
    if (category !== "todos") {
      result = result.filter((p) => {
        const cat = normalize(p.category);
        const name = normalize(p.name);
        if (category === "ropa") return cat === "ropa" || /(remera|hoodie|buzo|short)/.test(name);
        if (category === "suplementos") return cat === "suplementos" || /(creatina|prote|whey)/.test(name);
        return cat === "otros";
      });
    }
    if (sort === "price_asc") result.sort((a, b) => a.price - b.price);
    else if (sort === "price_desc") result.sort((a, b) => b.price - a.price);
    else result.sort((a, b) => normalize(a.name).localeCompare(normalize(b.name)));
    return result;
  }, [category, sort]);

  return (
    <div className="merch">
      <header className="merch__header">
        <div className="merch__headerLeft">
          <Link to="/" className="merch__back">‹</Link>
          <h1 className="merch__mainTitle">Primal Shop</h1>
        </div>
        <button className="merch__filterToggle" onClick={() => setShowFilters(true)}>
          FILTROS
        </button>
      </header>

      <main className="merch__content">
        <div className="merch__sectionHeader">
          <h2 className="merch__sectionTitle">Nuestros Productos</h2>
        </div>

        <Carousel>
          {filteredItems.map((p) => (
            <div className="embla__slide" key={p.id || p.name}>
              <Card product={p} />
            </div>
          ))}
        </Carousel>
      </main>

      {showFilters && (
        <div className="filters">
          <div className="filters__overlay" onClick={() => setShowFilters(false)} />
          <div className="filters__sheet">
            <div className="filters__handle" />
            <div className="filters__header">
              <h3 style={{margin:0}}>Filtros</h3>
              <button onClick={() => setShowFilters(false)} className="filters__closeBtn">✕</button>
            </div>
            <div className="filters__body">
              <div className="filters__group">
                <label>Categoría</label>
                <div className="filters__options">
                  {["todos", "ropa", "suplementos"].map((opt) => (
                    <button key={opt} className={`filters__chip ${category === opt ? "active" : ""}`} onClick={() => setCategory(opt)}>
                      {opt.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
              <div className="filters__group">
                <label>Ordenar por</label>
                <div className="filters__options">
                  <button className={`filters__chip ${sort === "name_asc" ? "active" : ""}`} onClick={() => setSort("name_asc")}>A-Z</button>
                  <button className={`filters__chip ${sort === "price_asc" ? "active" : ""}`} onClick={() => setSort("price_asc")}>Menor Precio</button>
                  <button className={`filters__chip ${sort === "price_desc" ? "active" : ""}`} onClick={() => setSort("price_desc")}>Mayor Precio</button>
                </div>
              </div>
            </div>
            <div className="filters__footer">
              <button className="filters__clear" onClick={() => { setCategory("todos"); setSort("name_asc"); }}>Limpiar</button>
              <button className="filters__apply" onClick={() => setShowFilters(false)}>LISTO</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}