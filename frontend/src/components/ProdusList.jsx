import ProdusCard from "./ProdusCard.jsx";
import styles from "./ProdusList.module.css";

export default function ProdusList({ produse, onToggle, onDelete }) {
  if (produse.length === 0) {
    return (
      <p className="empty" data-testid="empty">
        No products available in the catalog.
      </p>
    );
  }

  return (
    <ul className={styles.grid}>
      {produse.map((p) => (
        <ProdusCard
          key={p.id}
          produs={p}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}