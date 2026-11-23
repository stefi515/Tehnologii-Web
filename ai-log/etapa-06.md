# Stage 6: AI log

## Tools
- Gemini

## Conversations


## Key requests

### 1. Double fetch in Network tab and `useEffect` cleanup
- **Asked:** Why the browser Network tab showed two identical `GET /produse` requests on page load and how to properly guard state updates if the component unmounts early.
- **Got:** An explanation of React StrictMode's double-mount behavior in development and how to use a local `ignore` flag inside the `useEffect` cleanup function.
- **Changed or rejected:** Added the `ignore` flag around `setProduse`, `setError`, and `setLoading` in my `load()` function.

### 2. Handling HTTP errors in `api.js`
- **Asked:** Why `fetch` did not jump to the `catch` block when testing a broken route on `json-server`.
- **Got:** Clarification that `fetch` only rejects on network failures, so `if (!res.ok)` must be checked manually before calling `res.json()`.
- **Changed or rejected:** Added the `res.ok` check and kept the fallback `VITE_API_URL ?? "http://localhost:3001"`.

## What I learned / what did not work
I learned that seeing two requests in development is expected under StrictMode, and that explicit `res.ok` checks are necessary to catch 404/500 responses.