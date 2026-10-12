const produse = [
  { id: 1, titlu: "Canon EOS 1300D", inStoc: true, conditie: "used" },
  { id: 2, titlu: "Kodak Charmera", inStoc: false, conditie: "new" },
  { id: 3, titlu: "Astrophotography tripod", inStoc: true, conditie: "open-box" }
];

export default function App() {
  const inStoc = produse.filter((p) => p.inStoc).length;

  return (
    <>
      <header className="app-header">
        <h1>PhotoGear Store</h1>
        <p>Manage your catalog of photography components, cameras and accessories.</p>
        <p className="app-count">
          {produse.length} items, {inStoc} in stock
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Catalog</h2>
          <pre>{JSON.stringify(produse, null, 2)}</pre>
        </section>
      </main>

      <footer className="app-footer">Proiect Tehnologii Web</footer>
    </>
  );
}