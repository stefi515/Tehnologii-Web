import { Link } from "react-router-dom";
import { ETICHETE_CONDITIE } from "../constants.js";
import styles from "./ProdusCard.module.css";

export default function ProdusCard({ produs, onToggle, onDelete }) {
  return (
    <li
      className={
        !produs.inStoc ? `${styles.card} ${styles.outOfStock}` : styles.card
      }
      data-testid="item"
      data-id={produs.id}
    >
      {produs.imagine && (
        <div className={styles.imageContainer}>
          <img src={produs.imagine} alt={produs.titlu} className={styles.image} />
          <span className={`badge badge-${produs.conditie} ${styles.badgePos}`}>
            {ETICHETE_CONDITIE[produs.conditie] || produs.conditie}
          </span>
        </div>
      )}

      <div className={styles.details}>
        <Link
          to={`/produse/${produs.id}`}
          className={styles.title}
          data-testid="item-link"
        >
          {produs.titlu}
        </Link>

        {!produs.imagine && (
          <span className={`badge badge-${produs.conditie}`}>
            {ETICHETE_CONDITIE[produs.conditie] || produs.conditie}
          </span>
        )}

        <label className={styles.stockControl}>
          <input
            type="checkbox"
            checked={produs.inStoc}
            onChange={() => onToggle(produs.id)}
            aria-label={`Toggle stock for ${produs.titlu}`}
            data-testid="item-toggle"
          />
          <span className={produs.inStoc ? styles.inStockText : styles.outOfStockText}>
            {produs.inStoc ? "In Stock" : "Out of Stock"}
          </span>
        </label>

        <button
          className="btn-danger"
          onClick={() => onDelete(produs.id)}
          aria-label={`Delete ${produs.titlu}`}
          data-testid="item-delete"
        >
          Delete
        </button>
      </div>
    </li>
  );
}