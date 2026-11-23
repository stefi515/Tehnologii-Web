# Stage 7: AI log

## Tools
- Gemini

## Conversations


## Key requests

### 1. Keeping form input when the API is offline
- **Asked:** Why my form cleared the title input even when `json-server` was stopped and the `POST` request failed.
- **Got:** The AI pointed out that resetting the state in `finally` or before `await` wipes the input on failure, and suggested clearing the fields only right after `await onAdd(...)` succeeds, while letting `handleAdd` propagate the error back to the form.
- **Changed or rejected:** Moved `setTitlu("")` inside the `try` block after `await` and kept `setTrimite(false)` in `finally`.

### 2. Checking `tw.json` and `data-testid` naming
- **Asked:** Whether the `data-testid` names should be translated to match my English UI and how `sample` in `tw.json` maps to my `conditie` select field.
- **Got:** Confirmation that `data-testid` values must stay exact (`item`, `form-title`, `form-conditie`, etc.) and that `tw.json` should reference `produse`, `titlu`, and `inStoc`.
- **Changed or rejected:** Kept all `data-testid` attributes exact and verified them in the browser console with `querySelectorAll`.

## What I learned / what did not work
I learned how to structure `try / catch / finally` in async form submissions so user input is preserved on network errors and double-clicks are prevented.