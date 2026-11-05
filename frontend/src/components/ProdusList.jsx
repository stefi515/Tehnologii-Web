import ProdusCard from "./ProdusCard.jsx";

export default function ProdusList({ produse, onToggle, onDelete }) {
  if (produse.length === 0) {
    return <p className="empty">No products available in the catalog.</p>;
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