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
## Status
- [x] Stage 1: static mockup
- [X] Stage 2: data logic in JavaScript

## Verification table

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S1-R1 | README: description, fields, sample data, how to run | [README.md](https://github.com/stefi515/Tehnologii-Web/blob/main/README.md) | read |
| S1-R2 | AI usage section | [README.md#ai-usage](https://github.com/stefi515/Tehnologii-Web/blob/main/README.md#ai-usage) | read |
| S1-R3 | AI log for stage 1 | [ai-log/etapa-01.md](https://github.com/stefi515/Tehnologii-Web/blob/main/ai-log/etapa-01.md#stage-1-ai-log) | read |
| S1-R4 | header, form (text + select), 3 cards with own data | [index.html#L11-L60](https://github.com/stefi515/Tehnologii-Web/blob/main/index.html#L11-L60) | open the page |
| S1-R5 | finished card looks different | [style.css#L183-L206](https://github.com/stefi515/Tehnologii-Web/blob/main/style.css#L183-L206) | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | [desktop: style.css#L86-L94](https://github.com/stefi515/Tehnologii-Web/blob/main/style.css#L86-L94), [mobile: style.css#L258-L262](https://github.com/stefi515/Tehnologii-Web/blob/main/style.css#L258-L262) | resize < 700px |
| S1-R7 | visible focus, readable dark theme | [style.css#L24-L35](https://github.com/stefi515/Tehnologii-Web/blob/main/style.css#L24-L35) | Tab; dark mode |
| S1-R8 | commit “Stage 1” pushed | [commit Stage 1](https://github.com/stefi515/Tehnologii-Web/commit/f6975b5b839688553c4400502424cd343a93f6c2) | commit history | 

### Stage 2 verification table

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S2-R1 | JS file linked, logs on page load | [index.html#L66](https://github.com/stefi515/Tehnologii-Web/blob/main/index.html#L66) | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | [produse.js#L1-L6](https://github.com/stefi515/Tehnologii-Web/blob/main/produse.js#L1-L6) | read |
| S2-R3 | list, count, search, add, toggle, delete | [produse.js#L7-L44](https://github.com/stefi515/Tehnologii-Web/blob/main/produse.js#L7-L44) | console output |
| S2-R4 | add rejects empty name and invalid tag | [produse.js#L59-L60](https://github.com/stefi515/Tehnologii-Web/blob/main/produse.js#L59-L60) | last 2 console lines |
| S2-R5 | original array unchanged after add | [produse.js#L52](https://github.com/stefi515/Tehnologii-Web/blob/main/produse.js#L52) | console line |
| S2-R6 | README Stage 2 section + AI log | [README.md](https://github.com/stefi515/Tehnologii-Web/blob/main/README.md#stage-2-data-logic), [ai-log/etapa-02.md](https://github.com/stefi515/Tehnologii-Web/blob/main/ai-log/etapa-02.md) | read |
| S2-R7 | commit "Stage 2" pushed | [commit Stage 2](https://github.com/stefi515/Tehnologii-Web/commit/ac72aed825de75ab9dfd580920a846c50359fa05) | commit history |