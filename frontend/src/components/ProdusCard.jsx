const ETICHETE_CONDITIE = {
  "new": "New",
  "used": "Used",
  "open-box": "Open-box"
};

export default function ProdusCard({ produs }) {
  return (
    <li className={!produs.inStoc ? "item-card done" : "item-card"}>
      <div>
        <h3>{produs.titlu}</h3>
        <span className={`badge badge-${produs.conditie}`}>
          {ETICHETE_CONDITIE[produs.conditie]}
        </span>
      </div>
      <span className="status">
        {produs.inStoc ? "In stock" : "Out of stock"}
      </span>
    </li>
  );
}