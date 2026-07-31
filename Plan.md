# Project Structure & Tech Stack

## Overview
The **INNOLOG** repository is organized as a **full‑stack** application with a clear separation between the **frontend** (React + Vite + TypeScript) and the **backend** (Node.js + Express).  The layout follows common industry conventions, making it easy for new contributors to understand and extend.

---

## Repository Layout
```
INNOLOG/
├─ .gitignore                # Global ignore rules
├─ Plan.md                   # Project plan – this file
│
├─ backend/                  # Node/Express API
│   ├─ src/                  # Source files (ESM or TS preferred)
│   │   ├─ routes/           # Express route definitions
│   │   ├─ controllers/      # Business‑logic handlers
│   │   ├─ services/         # Reusable service layer (e.g., hardware collector)
│   │   ├─ types/            # TypeScript interfaces for API contracts
│   │   └─ server.ts         # Server entry point (Express app)
│   ├─ package.json          # Backend dependencies
│   └─ .env                  # Environment variables (port, DB, etc.)
│
└─ frontend/                 # Vite + React (TypeScript) UI
    ├─ public/               # Static assets (favicon, images accessed via URL)
    ├─ src/                  # React source code
    │   ├─ assets/           # Local images / SVGs used as imports
    │   ├─ components/       # Reusable UI components (e.g., SmallCard)
    │   ├─ pages/            # Route‑level components (Dashboard, Settings…)
    │   ├─ services/         # API client wrappers (fetch/axios)
    │   ├─ utils/            # Helper functions (date formatting, debounce, …)
    │   ├─ types/            # Shared TypeScript types and interfaces
    │   ├─ index.css         # Tailwind directives (`@tailwind base; …`)
    │   ├─ App.tsx            # Root component – currently a minimal Tailwind test
    │   └─ main.tsx           # React bootstrap; imports `index.css`
    ├─ tailwind.config.cjs   # Tailwind configuration (content paths, theme)
    ├─ postcss.config.cjs    # PostCSS setup for Tailwind
    ├─ vite.config.ts        # Vite configuration (React + Tailwind plugins, dev proxy)
    └─ package.json          # Frontend dependencies (React, Vite, Tailwind, ESLint…)
```

---

## Tech Stack
### Frontend
- **Framework:** React 18 (with the new JSX transform)
- **Build Tool:** Vite – fast dev server & optimized production bundling
- **Language:** TypeScript – static typing throughout the UI layer
- **Styling:** Tailwind CSS v3 – utility‑first styling, dark‑mode ready
- **Linting/Formatting:** ESLint + Prettier (configured for React/TS)
- **Testing (optional):** Vitest/Jest for unit and component tests

### Backend
- **Runtime:** Node.js (latest LTS) with ES modules (or optionally TypeScript)
- **Web Framework:** Express – minimalist API server
- **Environment Management:** `dotenv` for loading `.env` variables
- **Security:** `helmet` for HTTP headers, `cors` for cross‑origin handling
- **Logging:** `morgan` for request logging
- **Testing (optional):** Jest or Vitest for API unit tests

### DevOps / Tooling
- **Version Control:** Git (remote on GitHub: `https://github.com/Shubham9528/Innolog.git`)
- **Package Manager:** npm (or yarn/pnpm if preferred)
- **IDE Integration:** ESLint/Prettier auto‑fix on save, optional `devcontainer` for reproducible environments
- **Potential CI/CD:** GitHub Actions can lint, test, and build both frontend and backend on push/PR

---

## Next Steps (suggested)
1️⃣ **Add a services layer** on the frontend (`src/services/hardware.ts`) that calls the backend API.
2️⃣ **Create route‑level pages** (`src/pages/Dashboard.tsx`) and wire them with React Router.
3️⃣ **Migrate the backend to TypeScript** for type‑safe API contracts.
4️⃣ **Write basic unit tests** for both UI components and API endpoints.
5️⃣ **Add a README** summarizing how to run/dev the project locally and in production.

Feel free to update or extend any section as the project evolves!
