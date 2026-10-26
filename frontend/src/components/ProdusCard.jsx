const ETICHETE_CONDITIE = {
  "new": "New",
  "used": "Used",
  "open-box": "Open-box"
};

export default function ProdusCard({ produs, onToggle, onDelete }) {
  return (
    <li className={!produs.inStoc ? "item-card done" : "item-card"}>
      <label className="item-main">
        <input
          type="checkbox"
          checked={produs.inStoc}
          onChange={() => onToggle(produs.id)}
        />
      <div>
        <h3>{produs.titlu}</h3>
        <span className={`badge badge-${produs.conditie}`}>
          {ETICHETE_CONDITIE[produs.conditie]}
        </span>
      </div>
      </label>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
       <span className="status">
        {produs.inStoc ? "In stock" : "Out of stock"}
      </span>
      <button className="btn btn-danger" onClick={() => onDelete(produs.id)}
        aria-label={`Delete ${produs.titlu}`}>
        Delete
      </button>
      </div>
    </li>
  );
}