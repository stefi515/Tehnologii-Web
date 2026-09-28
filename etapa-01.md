# Stage 1: AI log
## Tools
- Gemini
## Conversations
- <share link> (<what it was about, e.g. CSS Grid layout>)
## Key requests
### 1. CSS Grid layout debugging (invisible column)
- **Asked:** I provided a screenshot and asked why the second column of the grid (the product list) was not displaying on the screen.
- **Got:** The AI analyzed the code and explained that an unclosed HTML tag (`<select>`) was blocking the rest of the page from rendering and breaking the Grid layout.
- **Changed or rejected:** I applied the HTML fix and manually customized the `:root` variables, choosing my own theme (burgundy accent `#440c0c` and background `#edbbbb`).

### 2. Synchronizing CSS classes for badges
- **Asked:** I asked it to check why the badges (New, Used, Open-Box) appeared colorless, even though I had declared the variables in CSS.
- **Got:** It explained that the text was white on a white background because I had left the old template classes (`badge-v1`) in `index.html`, which did not match the new CSS classes (`badge-new`, etc.).
- **Changed or rejected:** I corrected the classes in HTML, but once again modified the hex color codes proposed by the AI with ones I selected (pastel green and blue), to better match the white background of the panels.

## What I learned / what did not work
I learned that a single unclosed HTML tag can "break" an entire CSS Grid layout, hiding elements on the page.