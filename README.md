# Photography Equipment And Components Store
A retail hub offering a wide selection of digital cameras, lenses, and technical hardware components. It is for passionate people and professional artists.

## Data model
| Field | Type | Notes |
| ----------- | ------------ | ------------------------------------ |
| Product name | text | required, max 100 chars |
| In stock | boolean | toggled from the list, default false |
| Condition | fixed values | New, Used, Open-box |
| Category | relation | Cameras, Lenses, Accessories |
| User | relation | the owner of the item (from week 11) |

Sample data used across all stages:
1. Canon EOS 1300D, active, Used
2. Kodak Charmera, done, New
3. Astrophotography tripod, active, Open-box

## How to run
Open `index.html` in a browser. No build step, no server.

## AI usage
| Tool | Used for |
| -------------- | ----------------------------------------- |
| Gemini | Clarifying Git setup |

Details per stage: see the ai-log/ folder.
## Stage 2: data logic
Plain JavaScript, no DOM. produse.js holds the array and the functions
that read and change it. Results are printed in the browser console (F12).

## Stage 3: Vite and React project
The app now lives in `frontend/`, built with Vite. The data from stage 2
moved into the main component; the list is still printed raw.
## How to run
cd frontend
npm install
npm run dev
Then open the address printed in the terminal (http://localhost:5173)

## Stage 4: components
The list is rendered from the data, through two components:
`ProdusList` receives the whole array and renders one card per item.
`ProdusCard` receives a single item through props and displays it.

## Stage 5: local state and events
The list lives in React state. Checking and deleting work from the page,
and the counters in the header follow automatically. A button in the
header switches between light and dark mode. Changes are lost on refresh,
which is what stage 6 and stage 10 fix.

## Stage 6: data from a mock API
The catalog is served by `json-server` from `frontend/db.json`. The app fetches it on load via `src/api.js` and shows a loading state and an error state.
```bash
npm run api   # terminal 1, http://localhost:3001
npm run dev   # terminal 2, http://localhost:5173
```

## Stage 7: form and validation
Equipment items can be added directly from the page. The form is controlled and validated, and every change (add, stock toggle, delete) goes to the API before updating the list. Automated testing markers (tw.json and data-testid) were added.

## Stage 8: routing and detail page
Three pages behind React Router: the equipment catalog list, a detail page at `/produse/:id` (displaying brand, price, description, and specs), an about page (`/despre`), plus a 404 page for unknown URLs. Component styles moved to CSS Modules, keeping only shared variables and utility classes in `index.css`.
## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events
- [x] Stage 6: loading data from a mock API
- [x] Stage 7: form and validation
- [x] Stage 8: routing and detail page
- [ ] Stage 9: own backend with Express
## Verification table

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S1-R1 | README: description, fields, sample data, how to run | [README.md](https://github.com/stefi515/Tehnologii-Web/blob/f6975b5b839688553c4400502424cd343a93f6c2/README.md) | read |
| S1-R2 | AI usage section | [README.md#ai-usage](https://github.com/stefi515/Tehnologii-Web/blob/f6975b5b839688553c4400502424cd343a93f6c2/README.md#ai-usage) | read |
| S1-R3 | AI log for stage 1 | [ai-log/etapa-01.md](https://github.com/stefi515/Tehnologii-Web/blob/f6975b5b839688553c4400502424cd343a93f6c2/ai-log/etapa-01.md) | read |
| S1-R4 | header, form (text + select), 3 cards with own data | [mockup/index.html#L10-L58](https://github.com/stefi515/Tehnologii-Web/blob/main/mockup/index.html#L10-L58) | open the page |
| S1-R5 | finished card looks different | [mockup/style.css#L231-L235](https://github.com/stefi515/Tehnologii-Web/blob/main/mockup/style.css#L231-L235) | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | [desktop: mockup/style.css#L86-L94](https://github.com/stefi515/Tehnologii-Web/blob/main/mockup/style.css#L86-L94), [mobile: mockup/style.css#L258-L262](https://github.com/stefi515/Tehnologii-Web/blob/main/mockup/style.css#L182-L186) | resize < 700px |
| S1-R7 | visible focus, readable dark theme | [mockup/style.css#L24-L36](https://github.com/stefi515/Tehnologii-Web/blob/main/mockup/style.css#L24-L36) | Tab; dark mode |
| S1-R8 | commit “Stage 1” pushed | [commit Stage 1](https://github.com/stefi515/Tehnologii-Web/commit/f6975b5b839688553c4400502424cd343a93f6c2) | commit history |

### Stage 2 verification table

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S2-R1 | JS file linked, logs on page load | [index.html#L68](https://github.com/stefi515/Tehnologii-Web/blob/ac72aed825de75ab9dfd580920a846c50359fa05/index.html#L68) | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | [produse.js#L1-L6](https://github.com/stefi515/Tehnologii-Web/blob/ac72aed825de75ab9dfd580920a846c50359fa05/produse.js#L1-L6) | read |
| S2-R3 | list, count, search, add, toggle, delete | [produse.js#L7-L44](https://github.com/stefi515/Tehnologii-Web/blob/ac72aed825de75ab9dfd580920a846c50359fa05/produse.js#L7-L44) | console output |
| S2-R4 | add rejects empty name and invalid tag | [produse.js#L59-L60](https://github.com/stefi515/Tehnologii-Web/blob/ac72aed825de75ab9dfd580920a846c50359fa05/produse.js#L59-L60) | last 2 console lines |
| S2-R5 | original array unchanged after add | [produse.js#L52](https://github.com/stefi515/Tehnologii-Web/blob/ac72aed825de75ab9dfd580920a846c50359fa05/produse.js#L52) | console line |
| S2-R6 | README Stage 2 section + AI log | [README.md](https://github.com/stefi515/Tehnologii-Web/blob/main/README.md), [ai-log/etapa-02.md](https://github.com/stefi515/Tehnologii-Web/blob/main/ai-log/etapa-02.md) | read |
| S2-R7 | commit "Stage 2" pushed | [commit Stage 2](https://github.com/stefi515/Tehnologii-Web/commit/ac72aed825de75ab9dfd580920a846c50359fa05) | commit history |

### Stage 3 verification table

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S3-R1 | npm run dev starts without errors | [frontend/package.json](https://github.com/stefi515/Tehnologii-Web/blob/e771abea7ba8f1e790541f83013f52c8c8580660/frontend/package.json) | npm install, npm run dev |
| S3-R2 | app name and counter computed from data | [frontend/src/App.jsx#L13-L17](https://github.com/stefi515/Tehnologii-Web/blob/e771abea7ba8f1e790541f83013f52c8c8580660/frontend/src/App.jsx#L13-L17) | edit data, save |
| S3-R3 | data from README, not from the example | [frontend/src/App.jsx#L1-L5](https://github.com/stefi515/Tehnologii-Web/blob/e771abea7ba8f1e790541f83013f52c8c8580660/frontend/src/App.jsx#L1-L5) | compare with README |
| S3-R4 | stage 1 styles reused | [frontend/src/App.css](https://github.com/stefi515/Tehnologii-Web/blob/e771abea7ba8f1e790541f83013f52c8c8580660/frontend/src/App.css) | look at the page |
| S3-R5 | node_modules ignored, build passes | [frontend/.gitignore](https://github.com/stefi515/Tehnologii-Web/blob/e771abea7ba8f1e790541f83013f52c8c8580660/frontend/.gitignore) | npm run build |
| S3-R6 | README Stage 3 section + AI log | [README.md#stage-3-vite-and-react-project](https://github.com/stefi515/Tehnologii-Web/blob/main/README.md), [ai-log/etapa-03.md](https://github.com/stefi515/Tehnologii-Web/blob/e771abea7ba8f1e790541f83013f52c8c8580660/ai-log/etapa-03.md) | read |
| S3-R7 | commit "Stage 3" pushed | [commit Stage 3](https://github.com/stefi515/Tehnologii-Web/commit/e771abea7ba8f1e790541f83013f52c8c8580660) | commit history |

### Stage 4 verification table

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S4-R1 | 2+ components in src/components/ | [frontend/src/components/](https://github.com/stefi515/Tehnologii-Web/tree/main/frontend/src/components) | open folder |
| S4-R2 | card receives data through props | [frontend/src/components/ProdusCard.jsx#L7](https://github.com/stefi515/Tehnologii-Web/blob/main/frontend/src/components/ProdusCard.jsx#L7) | read |
| S4-R3 | map + key={id}, no console warnings | [frontend/src/components/ProdusList.jsx#L9-L11](https://github.com/stefi515/Tehnologii-Web/blob/main/frontend/src/components/ProdusList.jsx#L9-L11) | F12, Console |
| S4-R4 | message for empty list | [frontend/src/components/ProdusList.jsx#L4-L6](https://github.com/stefi515/Tehnologii-Web/blob/main/frontend/src/components/ProdusList.jsx#L4-L6) | set array to [] |
| S4-R5 | state changes the card look | [frontend/src/components/ProdusCard.jsx#L9](https://github.com/stefi515/Tehnologii-Web/blob/main/frontend/src/components/ProdusCard.jsx#9) | toggle a done flag |
| S4-R6 | README Stage 4 section + AI log | [README.md#stage-4-components](https://github.com/stefi515/Tehnologii-Web/blob/main/README.md#stage-4-components), [ai-log/etapa-04.md](https://github.com/stefi515/Tehnologii-Web/blob/main/ai-log/etapa-04.md) | read |
| S4-R7 | commit "Stage 4" pushed | [commit Stage 4](https://github.com/stefi515/Tehnologii-Web/commit/4b9ec041a539b8b75ab4585a375f28fb072f41eb) | commit history |

### Stage 5 verification table

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S5-R1 | list kept in useState, in App | [App.jsx#L15](https://github.com/stefi515/Tehnologii-Web/blob/main/frontend/src/App.jsx#L15) | read |
| S5-R2 | toggling changes state and card look | [App.jsx#L18-L22](https://github.com/stefi515/Tehnologii-Web/blob/main/frontend/src/App.jsx#L18-L22), [ProdusCard.jsx#L11-L15](https://github.com/stefi515/Tehnologii-Web/blob/main/frontend/src/components/ProdusCard.jsx#L11-L15) | click a checkbox |
| S5-R3 | delete removes the item | [App.jsx#L24-L26](https://github.com/stefi515/Tehnologii-Web/blob/main/frontend/src/App.jsx#L24-L26), [ProdusCard.jsx#L26-L29](https://github.com/stefi515/Tehnologii-Web/blob/main/frontend/src/components/ProdusCard.jsx#L26-L29) | click Delete |
| S5-R4 | header counter derived, not in state | [App.jsx#L34](https://github.com/stefi515/Tehnologii-Web/blob/main/frontend/src/App.jsx#L34) | toggle, watch header |
| S5-R5 | immutable updates (no push, splice, assignment) | [App.jsx#L18-L26](https://github.com/stefi515/Tehnologii-Web/blob/main/frontend/src/App.jsx#L18-L26) | read |
| S5-R6 | light/dark toggle: state + data-theme on html | [App.jsx#L28-L32](https://github.com/stefi515/Tehnologii-Web/blob/main/frontend/src/App.jsx#L28-L32), [App.css#L20-L33](https://github.com/stefi515/Tehnologii-Web/blob/main/frontend/src/App.css#L20-L33) | click the button, both system themes |
| S5-R7 | no console warnings; README + AI log | README.md, ai-log/etapa-05.md | F12, Console |
| S5-R8 | commit "Stage 5" pushed | [commit Stage 5](https://github.com/stefi515/Tehnologii-Web/commit/9821d2fe2c3000f5f7b60ef78efd6ae7c88cb030) | commit history |

### Stage 6 verification table
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S6-R1 | `npm run api` starts, route shows JSON | [package.json](https://github.com/stefi515/Tehnologii-Web/blob/b4b8652e9c43738f549dfa31a6c01e284869cf86/frontend/package.json#L8), [db.json](https://github.com/stefi515/Tehnologii-Web/blob/main/frontend/db.json) | open `localhost:3001/produse` |
| S6-R2 | data no longer in React code | [ProdusePage.jsx](https://github.com/stefi515/Tehnologii-Web/blob/b4b8652e9c43738f549dfa31a6c01e284869cf86/frontend/src/pages/ProdusePage.jsx#L13) (`useState([])`) | read |
| S6-R3 | loading message while waiting | [ProdusePage.jsx](https://github.com/stefi515/Tehnologii-Web/blob/b4b8652e9c43738f549dfa31a6c01e284869cf86/frontend/src/pages/ProdusePage.jsx#L96-L100) | `--delay 4000` |
| S6-R4 | error message when API is down | [ProdusePage.jsx](https://github.com/stefi515/Tehnologii-Web/blob/b4b8652e9c43738f549dfa31a6c01e284869cf86/frontend/src/pages/ProdusePage.jsx#L102-L106) | stop `npm run api`, refresh |
| S6-R5 | `fetch` only in `api.js`, URL from env | [api.js](https://github.com/stefi515/Tehnologii-Web/blob/b4b8652e9c43738f549dfa31a6c01e284869cf86/frontend/src/api.js#L1-L14), [.env.example](https://github.com/stefi515/Tehnologii-Web/blob/main/frontend/.env.example) | search for `fetch` |
| S6-R6 | README Stage 6 section + AI log | [README.md](LINK), [ai-log/etapa-06.md](https://github.com/stefi515/Tehnologii-Web/blob/main/ai-log/etapa-06.md) | read |
| S6-R7 | commit "Stage 6" pushed | [Stage 6 commit](https://github.com/stefi515/Tehnologii-Web/commit/6276f606a45b6ab5ca7551dc5b0c088c29ff782e) | commit history |


### Stage 7 verification table
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S7-R1 | controlled form: `value` + `onChange` on every field | [ProdusForm.jsx](https://github.com/stefi515/Tehnologii-Web/blob/b4b8652e9c43738f549dfa31a6c01e284869cf86/frontend/src/components/ProdusForm.jsx#L52-L74) | read |
| S7-R2 | empty title shows an error, nothing is sent | [ProdusForm.jsx](https://github.com/stefi515/Tehnologii-Web/blob/b4b8652e9c43738f549dfa31a6c01e284869cf86/frontend/src/components/ProdusForm.jsx#L13-L18) (`valideaza`) | submit empty, watch Network |
| S7-R3 | added item shows in the list and survives refresh | [ProdusePage.jsx](https://github.com/stefi515/Tehnologii-Web/blob/b4b8652e9c43738f549dfa31a6c01e284869cf86/frontend/src/pages/ProdusePage.jsx#L36-L39) (`handleAdd`), [api.js](https://github.com/stefi515/Tehnologii-Web/blob/b4b8652e9c43738f549dfa31a6c01e284869cf86/frontend/src/api.js#L24-L26) | add, refresh |
| S7-R4 | toggle and delete survive refresh | [ProdusePage.jsx](https://github.com/stefi515/Tehnologii-Web/blob/b4b8652e9c43738f549dfa31a6c01e284869cf86/frontend/src/pages/ProdusePage.jsx#L41-L58) | toggle/delete, refresh |
| S7-R5 | button disabled while sending, form cleared only on success | [ProdusForm.jsx](https://github.com/stefi515/Tehnologii-Web/blob/b4b8652e9c43738f549dfa31a6c01e284869cf86/frontend/src/components/ProdusForm.jsx#L32-L45) | `--delay 3000`; stop API and submit |
| S7-R6 | `tw.json` and the `data-testid` attributes from table 7.3 | [tw.json](https://github.com/stefi515/Tehnologii-Web/blob/main/frontend/tw.json), [ProdusCard.jsx](https://github.com/stefi515/Tehnologii-Web/blob/b4b8652e9c43738f549dfa31a6c01e284869cf86/frontend/src/components/ProdusCard.jsx#L7-L60) | `querySelectorAll` in the console |
| S7-R7 | README Stage 7 section + AI log | [README.md](LINK), [ai-log/etapa-07.md](https://github.com/stefi515/Tehnologii-Web/blob/main/ai-log/etapa-07.md) | read |
| S7-R8 | commit "Stage 7" pushed | [Stage 7 commit](https://github.com/stefi515/Tehnologii-Web/commit/b9419d335f78b52820da4041dd7abf1b1f4b3336) | commit history |

### Stage 8 verification table
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S8-R1 | header navigation changes page without reload | [App.jsx](https://github.com/stefi515/Tehnologii-Web/blob/main/frontend/src/App.jsxLINK), [Layout.jsx](https://github.com/stefi515/Tehnologii-Web/blob/b4b8652e9c43738f549dfa31a6c01e284869cf86/frontend/src/components/Layout.jsx#L30-L37) | click links, watch Network |
| S8-R2 | click on an item opens its detail page | [ProdusCard.jsx](https://github.com/stefi515/Tehnologii-Web/blob/b4b8652e9c43738f549dfa31a6c01e284869cf86/frontend/src/components/ProdusCard.jsx#L24-L30), [ProdusDetaliuPage.jsx](https://github.com/stefi515/Tehnologii-Web/blob/main/frontend/src/pages/ProdusDetaliuPage.jsx) | click a title |
| S8-R3 | refresh on the detail URL works; missing id shows an error | [ProdusDetaliuPage.jsx](https://github.com/stefi515/Tehnologii-Web/blob/b4b8652e9c43738f549dfa31a6c01e284869cf86/frontend/src/pages/ProdusDetaliuPage.jsx#L13-L51) | refresh `/produse/1`, open `/produse/999` |
| S8-R4 | unknown URL shows the app 404 page | [App.jsx (`path="*"`)](https://github.com/stefi515/Tehnologii-Web/blob/b4b8652e9c43738f549dfa31a6c01e284869cf86/frontend/src/App.jsx#L15), [NotFoundPage.jsx](https://github.com/stefi515/Tehnologii-Web/blob/main/frontend/src/pages/NotFoundPage.jsx) | open `/ceva` |
| S8-R5 | each component has its `.module.css`; `index.css` only shared styles | [src/components](https://github.com/stefi515/Tehnologii-Web/tree/main/frontend/src/components), [src/pages](https://github.com/stefi515/Tehnologii-Web/tree/main/frontend/src/pages), [index.css](https://github.com/stefi515/Tehnologii-Web/blob/main/frontend/src/index.css) | read |
| S8-R6 | `data-testid` attributes from tables 7.3 and 8.2; detail route `/produse/:id` | [Layout.jsx](https://github.com/stefi515/Tehnologii-Web/blob/main/frontend/src/components/Layout.jsx), [ProdusCard.jsx](https://github.com/stefi515/Tehnologii-Web/blob/main/frontend/src/components/ProdusCard.jsx), [ProdusDetaliuPage.jsx](https://github.com/stefi515/Tehnologii-Web/blob/main/frontend/src/pages/ProdusDetaliuPage.jsx), [NotFoundPage.jsx](https://github.com/stefi515/Tehnologii-Web/blob/main/frontend/src/pages/NotFoundPage.jsx) | `querySelector` in the console |
| S8-R7 | README Stage 8 section + AI log | [README.md](LINK), [ai-log/etapa-08.md](https://github.com/stefi515/Tehnologii-Web/blob/main/ai-log/etapa-08.md) | read |
| S8-R8 | commit "Stage 8" pushed | [Stage 8 commit](https://github.com/stefi515/Tehnologii-Web/commit/b4b8652e9c43738f549dfa31a6c01e284869cf86) | commit history |