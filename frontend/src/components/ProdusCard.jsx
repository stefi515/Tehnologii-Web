export default function ProdusCard({ produs, onToggle, onDelete }) {
  return (
    <li 
      className={`store-card ${!produs.inStoc ? "out-of-stock" : ""}`}
      data-testid="item" 
      data-id={produs.id}
    >
      <div className="card-image-container">
        <img src={produs.imagine} alt={produs.titlu} />
        <span className={`store-badge ${produs.conditie}`}>{produs.conditie}</span>
      </div>
      
      <div className="card-details">
        {/* Titlul marcat cu item-title */}
        <h3 data-testid="item-title">{produs.titlu}</h3>
        
        <label className="stock-control">
          {/* Checkbox-ul marcat cu item-toggle*/}
          <input
            type="checkbox"
            checked={produs.inStoc}
            onChange={() => onToggle(produs.id)}
            data-testid="item-toggle"
          />
          <span className={produs.inStoc ? "text-green" : "text-red"}>
            {produs.inStoc ? "In Stock" : "Out of Stock"}
          </span>
        </label>

        {/* Butonul de ștergere marcat cu item-delete*/}
        <button 
          className="btn-delete" 
          onClick={() => onDelete(produs.id)}
          data-testid="item-delete"
        >
          Delete
        </button>
      </div>
    </li>
  );
}