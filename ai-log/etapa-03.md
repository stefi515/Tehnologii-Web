# Stage 3: AI log

## Tools
- Gemini

## Conversations


## Key requests

### 1. PowerShell `mv` syntax and `npm install` network error
- **Asked:** While following Step 1 and Step 3 from the lab guide, I got a `Move-Item` positional parameter error in PowerShell when moving the files to `mockup/`, and an `ENOTFOUND registry.npmjs.org` error during `npm install`.
- **Got:** The AI explained that PowerShell requires commas between file names for `mv` (`mv index.html, style.css, produse.js mockup/`) and that the `npm` error was caused by a temporary Wi-Fi disconnection.
- **Changed or rejected:** I moved the files into `mockup/` and re-ran `npm install` once the internet connection was stable, which installed the packages with 0 vulnerabilities.

## What I learned / what did not work
I learned how Vite serves a React application using `main.jsx` and `<div id="root">`, how PowerShell syntax differs from Bash when moving multiple files, and how JSX dynamically computes values like `{produse.length}` and `{inStoc}` directly in the header.