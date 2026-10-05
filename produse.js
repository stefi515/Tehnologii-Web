const produse = [
  { id: 1, titlu: "Canon EOS 1300D", inStoc: true, conditie: "used" },
  { id: 2, titlu: "Kodak Charmera", inStoc: false, conditie: "new" },
  { id: 3, titlu: "Astrophotography tripod", inStoc: true, conditie: "open-box" }
];
const CONDITII = ["new", "used", "open-box"];
function listeazaTitluri(lista) {
return lista.map((t) => t.titlu);
}
console.log("Titluri:", listeazaTitluri(produse).join(", "));
function numaraInStoc(lista) {
  return lista.filter((p) => p.inStoc).length;
}
function cautaDupaTitlu(lista, text) {
  return lista.filter((p) => p.titlu.toLowerCase().includes(text.toLowerCase()));
}
function nextId(lista) {
  return lista.reduce((max, p) => Math.max(max, p.id), 0) + 1;
}
function adaugaProdus(lista, titlu, conditie) {
  const titluCurat = titlu.trim();
  if (titluCurat === "") {
    console.log("Eroare: Titlul nu poate fi gol.");
    return lista; 
    }
    if (!CONDITII.includes(conditie)) {
    console.log(`Eroare: Condiția '${conditie}' este invalidă.`);
    return lista; 
    }
    const nou = {
    id: nextId(lista),
    titlu: titluCurat,
    inStoc: true, 
    conditie: conditie
  };
  return [...lista, nou]; 
}
function comutaStoc(lista, id) {
  return lista.map((p) => (p.id === id ? { ...p, inStoc: !p.inStoc } : p));
}

function stergeProdus(lista, id) {
  return lista.filter((p) => p.id !== id);
}
console.log("--- Citire ---");
console.log("Titluri:", listeazaTitluri(produse).join(", "));
console.log("În stoc:", numaraInStoc(produse));
console.log("Căutare 'canon':", listeazaTitluri(cautaDupaTitlu(produse, "canon")).join(", "));
console.log("--- Adăugare ---");
let listaNoua = adaugaProdus(produse, "Sony Alpha a7 III", "new");
console.log("Lista nouă:", listaNoua.length, "produse");
console.log("Originalul a rămas cu:", produse.length, "produse"); 
console.log("--- Modificare și ștergere ---");
listaNoua = comutaStoc(listaNoua, 1);
console.log("După ieșirea din stoc a id-ului 1, mai sunt în stoc:", numaraInStoc(listaNoua));
listaNoua = stergeProdus(listaNoua, 3);
console.log("După ștergerea id-ului 3:", listeazaTitluri(listaNoua).join(", "));
console.log("--- Validare ---");
adaugaProdus(listaNoua, "   ", "new"); 
adaugaProdus(listaNoua, "Obiectiv 50mm", "stricat"); 
