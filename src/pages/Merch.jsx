// src/pages/Merch.jsx
import React, { useMemo, useState } from "react";
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

// Normalización y heurísticas
const normalize = (v) => String(v ?? "").toLowerCase();

function isRopa(p) {
  const cat = normalize(p.category);
  const tags = (p.tags || []).map(normalize);
  const name = normalize(p.name);
  return (
    cat === "ropa" ||
    tags.some((t) =>
      [
        "ropa","remera","camiseta","musculosa",
        "hoodie","buzo","campera","pantalon","pantalón",
        "short","gorra","cap","oversize","unisex"
      ].includes(t)
    ) ||
    /(remera|camiseta|hoodie|buzo|campera|pantal|short|gorra|cap|tee|oversize)/.test(name)
  );
}

function isSuplemento(p) {
  const cat = normalize(p.category);
  const tags = (p.tags || []).map(normalize);
  const name = normalize(p.name);
  return (
    cat === "suplementos" ||
    cat === "supplements" ||
    tags.some((t) =>
      [
        "suplementos","creatina","proteina","proteína",
        "whey","preworkout","pre-workout","bcaa",
        "glutamina","multivitamínico","multivitaminico"
      ].includes(t)
    ) ||
    /(creatina|prote(í|i)na|whey|pre.?workout|bcaa|glutamina|multivit)/.test(name)
  );
}

function categoryOf(p) {
  if (isRopa(p)) return "ropa";
  if (isSuplemento(p)) return "suplementos";
  return "otros";
}

// ---- UI ----
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

function Section({ title, items }) {
  if (!items || items.length === 0) return null;
  return (
    <section className="merch__section">
      <h2 className="merch__sectionTitle">
        {title} <span className="merch__badge">{items.length}</span>
      </h2>
      <div className="merch__grid">
        {items.map((p) => (
          <Card key={p.id ?? p.image} product={p} />
        ))}
      </div>
    </section>
  );
}

export default function Merch({ items }) {
  const base = Array.isArray(items) ? items : products;

  // Estado de filtros
  const [category, setCategory] = useState("todos"); 
  const [minP, setMinP] = useState("");             
  const [maxP, setMaxP] = useState("");
  const [sort, setSort] = useState("name_asc");     
  const [showFilters, setShowFilters] = useState(false); // nuevo

  // Precalcular min/max del dataset
  const { datasetMin, datasetMax } = useMemo(() => {
    const prices = base.map((p) => (typeof p.price === "number" ? p.price : null)).filter(Boolean);
    return {
      datasetMin: prices.length ? Math.min(...prices) : 0,
      datasetMax: prices.length ? Math.max(...prices) : 0,
    };
  }, [base]);

  // Helpers de filtro/sort
  const withinPrice = (p) => {
    const price = typeof p.price === "number" ? p.price : null;
    if (price == null) return false;
    const min = minP === "" ? -Infinity : Number(minP);
    const max = maxP === "" ? Infinity : Number(maxP);
    return price >= min && price <= max;
  };

  const applySort = (arr) => {
    const copy = [...arr];
    switch (sort) {
      case "name_desc":
        return copy.sort((a, b) => normalize(b.name).localeCompare(normalize(a.name)));
      case "price_asc":
        return copy.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
      case "price_desc":
        return copy.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
      case "name_asc":
      default:
        return copy.sort((a, b) => normalize(a.name).localeCompare(normalize(b.name)));
    }
  };

  // Particiones base
  const ropa = base.filter(isRopa);
  const suplementos = base.filter(isSuplemento);
  const otros = base.filter((p) => !isRopa(p) && !isSuplemento(p));

  // Aplicar filtros de precio y orden a cada grupo
  const ropaF = applySort(ropa.filter(withinPrice));
  const suplementosF = applySort(suplementos.filter(withinPrice));
  const otrosF = applySort(otros.filter(withinPrice));

  const totalFiltered = ropaF.length + suplementosF.length + otrosF.length;

  // Si se elige una categoría específica, mostramos solo esa sección
  const sections = (() => {
    if (category === "ropa") return [{ title: "Ropa", items: ropaF }];
    if (category === "suplementos") return [{ title: "Suplementos", items: suplementosF }];
    if (category === "otros") return [{ title: "Otros", items: otrosF }];
    return [
      { title: "Ropa", items: ropaF },
      { title: "Suplementos", items: suplementosF },
      { title: "Otros", items: otrosF },
    ];
  })();

  // Acción rápida: limpiar filtros
  const clearFilters = () => {
    setCategory("todos");
    setMinP("");
    setMaxP("");
    setSort("name_asc");
  };

  return (
    <div className="merch">
      <header className="merch__header">
        <div className="merch__left">
          <Link to="/" className="merch__back" aria-label="Volver al Home" title="Volver">
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <h1 className="merch__title">Primal Strength Shop</h1>
        </div>
        <span className="merch__count">{totalFiltered} / {base.length} items</span>
        <button className="merch__filtersBtn" onClick={() => setShowFilters(true)}>
          Filtros
        </button>
      </header>

      {/* Panel de filtros */}
      {showFilters && (
        <div className="filters__panel">
          <div className="filters__overlay" onClick={() => setShowFilters(false)} />
          <div className="filters__content">
            <button className="filters__close" onClick={() => setShowFilters(false)}>
              &times; 
            </button>

            <div className="filters__grid">
              <label className="filters__field">
                <span className="filters__label">Categoría</span>
                <select
                  className="filters__control"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="todos">Todos</option>
                  <option value="ropa">Ropa</option>
                  <option value="suplementos">Suplementos</option>
                  <option value="otros">Otros</option>
                </select>
              </label>

              <label className="filters__field">
                <span className="filters__label">Precio mínimo</span>
                <input
                  className="filters__control"
                  type="number"
                  placeholder={datasetMin ? String(datasetMin) : "0"}
                  value={minP}
                  min={0}
                  onChange={(e) => setMinP(e.target.value)}
                />
              </label>

              <label className="filters__field">
                <span className="filters__label">Precio máximo</span>
                <input
                  className="filters__control"
                  type="number"
                  placeholder={datasetMax ? String(datasetMax) : "0"}
                  value={maxP}
                  min={0}
                  onChange={(e) => setMaxP(e.target.value)}
                />
              </label>

              <label className="filters__field">
                <span className="filters__label">Ordenar</span>
                <select
                  className="filters__control"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                >
                  <option value="name_asc">A–Z</option>
                  <option value="name_desc">Z–A</option>
                  <option value="price_asc">Precio ↑</option>
                  <option value="price_desc">Precio ↓</option>
                </select>
              </label>
            </div>

            <button className="filters__clear" type="button" onClick={clearFilters}>
              Limpiar filtros
            </button>
          </div>
        </div>
      )}

      <main className="merch__main">
        {totalFiltered === 0 && (
          <div className="merch__empty">No hay productos que coincidan con los filtros.</div>
        )}

        {sections.map((s) => (
          <Section key={s.title} title={s.title} items={s.items} />
        ))}
      </main>

      <footer className="merch__footer">
        <small>© {new Date().getFullYear()} Primal Strength</small>
      </footer>
    </div>
  );
}
