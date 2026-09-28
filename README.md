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