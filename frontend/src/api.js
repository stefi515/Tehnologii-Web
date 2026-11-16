// frontend/src/api.js
export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001"; 

// Funcție comună: trimite JSON și aruncă eroare dacă răspunsul nu este 2xx
async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options, //[cite: 3]
    headers: { "Content-Type": "application/json", ...options.headers },
  });
  
  if (!res.ok) {
    throw new Error(`Eroare server: ${res.status}`);
  }
  
  // 204 No Content nu are corp[cite: 3]
  return res.status === 204 ? null : res.json(); 
}

export function fetchProduse() {
  return request("/produse"); 
}
export function createProdus(produs) {
  return request("/produse", { method: "POST", body: JSON.stringify(produs) }); 
}

export function updateProdus(id, changes) {
  return request(`/produse/${id}`, { method: "PATCH", body: JSON.stringify(changes) });
}

export function deleteProdus(id) {
  return request(`/produse/${id}`, { method: "DELETE" }); 
}