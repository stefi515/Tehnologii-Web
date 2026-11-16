import { useState, useEffect } from "react";
import ProdusList from "./components/ProdusList.jsx";
import ProdusForm from "./components/ProdusForm.jsx";
import { fetchProduse, createProdus, updateProdus, deleteProdus } from "./api.js";

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [produse, setProduse] = useState([]);
  const [tema, setTema] = useState(temaInitiala);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Rulează o singură dată, după prima randare
  useEffect(() => {
    let ignore = false; // nu se setează state dacă pagina s-a închis între timp
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

  // Întâi serverul, apoi state-ul: pe ecran ajunge doar ce s-a salvat
  async function handleAdd(produs) {
    const creat = await createProdus(produs); // serverul întoarce elementul cu id
    setProduse((prev) => [...prev, creat]); // adaugă la finalul listei
  }

  async function handleToggleStoc(id) {
    const produs = produse.find((p) => p.id === id); // caută elementul pentru a afla starea lui curentă
    try {
      // PATCH trimite doar câmpul schimbat
      const actualizat = await updateProdus(id, { inStoc: !produs.inStoc });
      setProduse((prev) => prev.map((p) => (p.id === id ? actualizat : p))); // obiectul întors de server se pune în listă
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteProdus(id);
      setProduse((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      setError(err.message);
    }
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
        {/* Panoul stâng: Formularul */}
        <section className="panel">
          <h2>Adaugă Echipament</h2>
          <ProdusForm onAdd={handleAdd} />
        </section>

        {/* Panoul drept: Lista */}
        <section className="panel">
          <h2>Catalog</h2>
          
          {loading && (
            <p className="info" data-testid="loading">
              Loading products...
            </p>
          )}
          
          {error && (
            <p className="error" data-testid="error">
              {error}
            </p>
          )}
          
          {/* Condiția devine doar !loading, pentru ca lista să rămână pe ecran dacă o bifare/ștergere eșuează */}
          {!loading && (
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