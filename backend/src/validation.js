export const CONDITII = ["new", "used", "open-box"];
const TITLU_MAX = 100;

// partial = true pentru PATCH (se verifică doar câmpurile trimise)[cite: 75]
export function valideazaProdus(body, { partial = false } = {}) {
  const erori = [];
  const date = {};

  if (!partial || body.titlu !== undefined) {
    if (typeof body.titlu !== "string" || body.titlu.trim() === "") {
      erori.push("titlu este obligatoriu");
    } else if (body.titlu.trim().length > TITLU_MAX) {
      erori.push(`titlu are maximum ${TITLU_MAX} de caractere`);
    } else {
      date.titlu = body.titlu.trim();
    }
  }

  if (!partial || body.conditie !== undefined) {
    const c = body.conditie ?? "new";
    if (!CONDITII.includes(c)) {
      erori.push(`conditie trebuie să fie una din: ${CONDITII.join(", ")}`);
    } else {
      date.conditie = c;
    }
  }

  if (body.inStoc !== undefined) {
    if (typeof body.inStoc !== "boolean") {
      erori.push("inStoc trebuie să fie true sau false");
    } else {
      date.inStoc = body.inStoc;
    }
  } else if (!partial) {
    date.inStoc = false;
  }

  // Câmpuri opționale permise în lista albă (restul sunt ignorate)
 for (const camp of ["imagine", "brand", "descriere", "specificatii"]) {
    if (body[camp] !== undefined && typeof body[camp] === "string") {
      date[camp] = body[camp].trim();
    }
  }

  return { erori, date };
}

// Id-urile din adresă vin ca text; se acceptă doar numere întregi pozitive
export function parseId(value) {
  const id = Number(value);
  return Number.isInteger(id) && id > 0 ? id : null;
}