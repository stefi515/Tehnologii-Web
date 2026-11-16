import ProdusCard from "./ProdusCard.jsx";

export default function ProdusList({ produse, onToggle, onDelete }) {
  if (produse.length === 0) {
    return (
      // Mesajul pentru lista goală marcat cu empty
      <p className="empty" data-testid="empty">
        No products available in the catalog.
      </p>
    );
  }
  
  return (
    <ul className="store-grid">
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