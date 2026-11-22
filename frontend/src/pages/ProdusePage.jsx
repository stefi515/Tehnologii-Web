import { useEffect, useState } from "react";
import ProdusList from "../components/ProdusList.jsx";
import ProdusForm from "../components/ProdusForm.jsx";
import {
  createProdus,
  deleteProdus,
  fetchProduse,
  updateProdus,
} from "../api.js";
import styles from "./ProdusePage.module.css";

export default function ProdusePage() {
  const [produse, setProduse] = useState([]);
  const [search, setSearch] = useState("");
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

  async function handleAdd(produs) {
    const creat = await createProdus(produs);
    setProduse((prev) => [...prev, creat]);
  }

  async function handleToggle(id) {
    const produs = produse.find((p) => p.id === id);
    try {
      const actualizat = await updateProdus(id, { inStoc: !produs.inStoc });
      setProduse((prev) => prev.map((p) => (p.id === id ? actualizat : p)));
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

  const query = search.trim().toLowerCase();
  const produseFiltrate = query
    ? produse.filter((p) =>
        [p.titlu, p.brand, p.conditie, p.descriere]
          .filter(Boolean)
          .some((camp) => camp.toLowerCase().includes(query))
      )
    : produse;

  const inStoc = produse.filter((p) => p.inStoc).length;

  return (
    <div className={styles.stack}>
      <section className={`panel ${styles.addPanel}`}>
        <h2>Add Equipment</h2>
        <ProdusForm onAdd={handleAdd} />
      </section>

      <section className="panel">
        <div className={styles.catalogHeader}>
          <div>
            <h2>Equipment Catalog</h2>
            <p className={styles.summary}>
              {produse.length} items, {inStoc} in stock
            </p>
          </div>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search equipment..."
            aria-label="Search equipment"
            className={styles.search}
          />
        </div>

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

        {!loading && (
          <ProdusList
            produse={produseFiltrate}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        )}
      </section>
    </div>
  );
}