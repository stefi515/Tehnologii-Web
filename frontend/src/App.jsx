import ProdusList from "./components/ProdusList.jsx";
import { fetchProduse } from "./api.js";
import { useState, useEffect } from "react";

/* const PRODUSE_INITIALE = [
  { id: 1, titlu: "Canon EOS 1300D", inStoc: true, conditie: "used" },
  { id: 2, titlu: "Kodak Charmera", inStoc: false, conditie: "new" },
  { id: 3, titlu: "Astrophotography tripod", inStoc: true, conditie: "open-box" } 
]; */

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [produse, setProduse] = useState([]);
  const [tema, setTema] = useState(temaInitiala);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        const data = await fetchProduse();
        if (!ignore) setProduse(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    load();
    return () => {
      ignore = true;
    };
  }, []);

  function handleToggleStoc(id) {
    setProduse((prev) =>
      prev.map((p) => (p.id === id ? { ...p, inStoc: !p.inStoc } : p))
    );
  }

  function handleDelete(id) {
    setProduse((prev) => prev.filter((p) => p.id !== id));
  }

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  const inStoc = produse.filter((p) => p.inStoc).length;

  return (
    <>
      <header className="app-header">
        <button className="theme-toggle" onClick={handleTema} aria-pressed={tema === "dark"}>
          {tema === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
        <h1>PhotoGear Store</h1>
        <p>Manage your catalog of photography components, cameras and accessories.</p>
        <p className="app-count">
          {produse.length} items, {inStoc} in stock
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Catalog</h2>
          
          {loading && <p className="info">Loading products...</p>}
          {error && (
            <p className="error">
              Nu am putut încărca datele: {error}. Rulează <code>npm run api</code>?
            </p>
          )}
          {!loading && !error && (
            <ProdusList 
              produse={produse} 
              onToggle={handleToggleStoc} 
              onDelete={handleDelete} 
            />
          )}

        </section>
      </main>
      <footer className="app-footer">Proiect Tehnologii Web</footer>
    </>
  );
}