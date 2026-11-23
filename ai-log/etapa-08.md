# Stage 8: AI log

## Tools
- Gemini

## Conversations
https://share.gemini.google/ljpqpzIfgCBl

## Key requests

### 1. Vite import resolution error after adding routes
- **Asked:** Why Vite threw `Failed to resolve import "./pages/ProdusePage.jsx" from "src/App.jsx"` when starting `npm run dev`.
- **Got:** From my VS Code Explorer screenshot, the AI noticed that `pages/` was placed directly inside `frontend/` instead of `frontend/src/`, and that `ProdusDetaliu.module.css` was missing `Page` in its filename.
- **Changed or rejected:** Moved `pages/` into `frontend/src/` and renamed the CSS Module to `ProdusDetaliuPage.module.css`.

### 2. Adjusting CSS Grid layout and live search filter
- **Asked:** How to improve the alignment on the detail page and make the Add Equipment panel less tall so the catalog has more space, plus why my search input wasn't filtering by condition or description.
- **Got:** CSS Grid adjustments for a two-column detail view and a single-row form bar, plus a reminder to pass `produseFiltrate` into `ProdusList` and filter across `titlu`, `brand`, `conditie`, and `descriere`.
- **Changed or rejected:** Applied the layout tweaks and kept all existing `data-testid` attributes intact.

## What I learned / what did not work
I learned that Vite resolves relative imports strictly from `src/`, and how CSS Modules make it easier to refactor page layouts without breaking styles in other components.