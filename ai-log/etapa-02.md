# Stage 2: AI log

## Tools
- Gemini

## Conversations

## Key requests

### 1. Data logic implementation & Immutability validation
- **Asked:** I asked for verification of my `produse.js` file to ensure the core functions (`map`, `filter`, `reduce`) follow the immutability principles and that the data structure accurately maps to the photography equipment domain.
- **Got:** The AI reviewed the function implementations (`listeazaTitluri`, `numaraInStoc`, `cautaDupaTitlu`, `adaugaProdus`, `comutaStoc`, `stergeProdus`), verified that new arrays and objects are returned via the spread operator (`...`), and pointed out an unneeded duplicate `console.log` at the beginning of the file that was breaking the grouped console output format.
- **Changed or rejected:** I removed the stray `console.log`, organized all console tests into the required structured sections (`Citire`, `Adăugare`, `Modificare și ștergere`, `Validare`), and confirmed that `produse.length` remained unchanged after adding a new product.

### 2. Validation and checklist compliance
- **Asked:** I asked what each requirement code in the Stage 2 checklist represents (`S2-R1` through `S2-R7`) and where to link them in GitHub.
- **Got:** The AI provided the exact mapping for each requirement
- **Changed or rejected:** I adopted the table structure, corrected data consistency between `README.md` and `produse.js` (standardizing on `open-box`), and prepared the permalinks for the Stage 2 checklist commit.

## What I learned / what did not work
I learned that using the spread operator (`[...lista, nou]` and `{ ...item, inStoc: !item.inStoc }`) ensures that the original array remains immutable, which is essential for React state management. I also learned that calculating an ID with `reduce` (`Math.max(...) + 1`) prevents duplicate IDs when items are deleted.