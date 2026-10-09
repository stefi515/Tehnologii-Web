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
3. Astrophotography tripod, active, New

## How to run
Open `index.html` in a browser. No build step, no server.

## AI usage
| Tool | Used for |
| -------------- | ----------------------------------------- |
| Gemini | Clarifying Git setup |

Details per stage: see the ai-log/ folder.

## Status
- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript

## Verification table
| ID | Requirement | Where (permalink) | How to check |
| S1-R1 | README: description, fields, sample data, how to run | [README.md](https://github.com/stefi515/Tehnologii-Web/blob/main/README.md)|  read |
| S1-R2 | AI usage section | [README.md]https://github.com/stefi515/Tehnologii-Web/blob/main/README.md#ai-usage| read |
| S1-R3 | AI log for stage 1 | [ai-log/etapa-01.md]https://github.com/stefi515/Tehnologii-Web/blob/main/ai-log/etapa-01.md#stage-1-ai-log | read |
| S1-R4 | header, form (text + select), 3 cards with own data | [index.html#L11-L60]https://github.com/stefi515/Tehnologii-Web/blob/main/index.html | open the page |
| S1-R5 | finished card looks different | [style.css#L183-L206]https://github.com/stefi515/Tehnologii-Web/blob/main/style.css | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | [style.css#L86-L94/L258-262]https://github.com/stefi515/Tehnologii-Web/blob/main/style.css| resize < 700px |
| S1-R7 | visible focus, readable dark theme | [style.css#L24-L35]https://github.com/stefi515/Tehnologii-Web/blob/main/style.css| Tab; dark mode |
| S1-R8 | commit “Stage 1” pushed | [https://github.com/stefi515/Tehnologii-Web/commit/f6975b5b839688553c4400502424cd343a93f6c2 | commit history |