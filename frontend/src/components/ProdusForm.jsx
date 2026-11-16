// frontend/src/components/ProdusForm.jsx
import { useState } from "react";

const CONDITII = [
  { value: "NEW", label: "Nou (New)" },
  { value: "USED", label: "Folosit (Used)" },
  { value: "OPEN-BOX", label: "Desigilat (Open-Box)" }
];
const TITLU_MAX = 100; 

export default function ProdusForm({ onAdd }) {
  const [titlu, setTitlu] = useState("");
  const [conditie, setConditie] = useState("NEW");
  const [eroare, setEroare] = useState(""); 
  const [trimite, setTrimite] = useState(false); 

  function valideaza() {
    const t = titlu.trim();
    if (t === "") return "Titlul este obligatoriu."; 
    if (t.length > TITLU_MAX) return `Titlul are maximum ${TITLU_MAX} de caractere.`; 
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault(); // oprește reîncărcarea paginii
    const mesaj = valideaza();
    
    if (mesaj) {
      setEroare(mesaj);
      return; 
    }
    
    setEroare(""); // șterge o eroare rămasă de la o încercare anterioară
    setTrimite(true); // dezactivează butonul și îi schimbă textul
    
    try {
      // Trimitem echipamentul la App. Implicit setăm in_stoc pe true
      await onAdd({ titlu: titlu.trim(), conditie, in_stoc: true }); 
      setTitlu(""); // golirea câmpurilor se face doar dacă salvarea a reușit
      setConditie("NEW"); 
    } catch (err) {
      setEroare(err.message); 
    } finally {
      setTrimite(false); // repune butonul în funcțiune, indiferent cum s-a terminat cererea
    }
  }

  return (
    <form className="task-form" onSubmit={handleSubmit} noValidate data-testid="form">
      <label>
        Titlu Echipament
        <input
          type="text"
          value={titlu}
          onChange={(e) => setTitlu(e.target.value)}
          placeholder="Ex: Canon EOS 1300D"
          maxLength={TITLU_MAX}
          aria-invalid={Boolean(eroare)}
          data-testid="form-title"
        />
      </label>
      <label>
        Condiție
        <select
          value={conditie}
          onChange={(e) => setConditie(e.target.value)}
          data-testid="form-conditie"
        >
          {CONDITII.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </label>
      {eroare && (
        <p className="error" data-testid="form-error">
          {eroare}
        </p>
      )}
      <button type="submit" disabled={trimite} data-testid="form-submit">
        {trimite ? "Se salvează..." : "Adaugă în catalog"}
      </button>
    </form>
  );
}