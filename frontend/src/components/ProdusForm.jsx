import { useState } from "react";
import { CONDITII } from "../constants.js";
import styles from "./ProdusForm.module.css";

const TITLU_MAX = 100;

export default function ProdusForm({ onAdd }) {
  const [titlu, setTitlu] = useState("");
  const [conditie, setConditie] = useState("new");
  const [eroare, setEroare] = useState("");
  const [trimite, setTrimite] = useState(false);

  function valideaza() {
    const t = titlu.trim();
    if (t === "") return "Product title is required.";
    if (t.length > TITLU_MAX) return `Title must be at most ${TITLU_MAX} characters.`;
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const mesaj = valideaza();

    if (mesaj) {
      setEroare(mesaj);
      return;
    }

    setEroare("");
    setTrimite(true);

    try {
      await onAdd({
        titlu: titlu.trim(),
        conditie,
        inStoc: true,
        imagine: "",
      });
      setTitlu("");
      setConditie("new");
    } catch (err) {
      setEroare(err.message);
    } finally {
      setTrimite(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate data-testid="form">
      <label>
        Equipment Title
        <input
          type="text"
          value={titlu}
          onChange={(e) => setTitlu(e.target.value)}
          placeholder="e.g. Canon EOS 1300D"
          maxLength={TITLU_MAX}
          aria-invalid={Boolean(eroare)}
          data-testid="form-title"
        />
      </label>
      <label>
        Condition
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
      <button type="submit" className="btn" disabled={trimite} data-testid="form-submit">
        {trimite ? "Saving..." : "Add to Catalog"}
      </button>
    </form>
  );
}