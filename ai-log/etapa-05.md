# Stage 5: AI log

## Tools
- Gemini

## Conversations


## Key requests


### 1. Debugging `onToggle is not defined` error
- **Asked:** Why the browser displayed a completely black screen and the console showed an `Uncaught ReferenceError: onToggle is not defined` error after implementing the components.
- **Got:** The AI identified that the `onToggle` and `onDelete` functions were declared in `App.jsx` but were missing from the props received and passed down by the `ProdusList` intermediate component.
- **Changed or rejected:** I updated the `ProdusList` component to properly accept `{ produse, onToggle, onDelete }` as props and pass them to the cards. This immediately fixed the crash.


## What I learned / what did not work
I learned the importance of explicitly passing props down the component tree (from `App` to `ProdusList` to `ProdusCard`) and how missing a prop can cause the entire React app to crash with a black screen.