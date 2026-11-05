export default function ProdusCard({ produs, onToggle, onDelete }) {
  return (
    <li className={`store-card ${!produs.inStoc ? "out-of-stock" : ""}`}>
      <div className="card-image-container">
        <img src={produs.imagine} alt={produs.titlu} />
        <span className={`store-badge ${produs.conditie}`}>{produs.conditie}</span>
      </div>
      
      <div className="card-details">
        <h3>{produs.titlu}</h3>
        
        <label className="stock-control">
          <input
            type="checkbox"
            checked={produs.inStoc}
            onChange={() => onToggle(produs.id)}
          />
          <span className={produs.inStoc ? "text-green" : "text-red"}>
            {produs.inStoc ? "In Stock" : "Out of Stock"}
          </span>
        </label>

        <button className="btn-delete" onClick={() => onDelete(produs.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}