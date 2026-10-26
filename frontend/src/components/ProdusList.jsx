import ProdusCard from "./ProdusCard.jsx";

export default function ProdusList({ produse, onToggle, onDelete }) {
  if (produse.length === 0) {
    return <p className="empty">No products available in the catalog.</p>;
  }
  return (
    <ul className="item-list">
      {produse.map((produs) => (
        <ProdusCard 
          key={produs.id} 
          produs={produs} 
          onToggle={onToggle} 
          onDelete={onDelete} 
        />
      ))}
    </ul>
  );
}