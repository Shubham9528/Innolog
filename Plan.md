# Project Structure & Tech Stack

## Overview
The **INNOLOG** repository is a **full-stack** application with a clear separation between the **frontend** (React + Vite + TypeScript) and the **backend** (Node.js + Express). Below reflects the **current implemented state** of the project.

---

## Current Repository Layout

`
INNOLOG/
├── .gitignore
├── Plan.md                        # This file
├── project-understanding.md       # Production system analysis
│
├── backend/                       # Node.js/Express API
│   ├── server.js                  # Express entry point (ESM)
│   ├── .env                       # Environment variables (PORT=5000)
│   ├── package.json               # Backend dependencies
│   └── node_modules/
│
└── frontend/                      # Vite + React (TypeScript) UI
    ├── public/                    # Static assets (favicon)
    ├── index.html
    ├── vite.config.ts
    ├── package.json
    └── src/
        ├── assets/                # Images used as imports
        │   ├── acoustic_propagation.png
        │   ├── autoclave_telemetry_showcase.png
        │   └── transducer_hardware.png
        ├── components/
        │   ├── common/            # (empty — to be populated)
        │   ├── header/
        │   │   └── Navbar.tsx
        │   ├── footer/
        │   │   └── Footer.tsx
        │   ├── landing/           # Landing page sections
        │   │   ├── HeroSection.tsx
        │   │   ├── FeaturesSection.tsx
        │   │   ├── ComplianceSection.tsx
        │   │   ├── ArchitectureSection.tsx
        │   │   ├── DataIntegritySection.tsx
        │   │   ├── ProjectOverviewSection.tsx
        │   │   ├── ShowcaseSection.tsx
        │   │   ├── SpecsSection.tsx
        │   │   ├── CallToActionSection.tsx
        │   │   ├── Navbar.tsx
        │   │   ├── Footer.tsx
        │   │   └── index.ts
        │   └── dashboard/         # Dashboard UI components
        │       ├── Dashboard.tsx
        │       ├── index.ts
        │       └── component/
        │           ├── DashboardHeader.tsx
        │           ├── DashboardSidebar.tsx
        │           └── statistics/
        │               ├── TelemetryCards.tsx
        │               ├── TelemetryChart.tsx
        │               ├── LiveLogTable.tsx
        │               └── CycleStatusCard.tsx
        ├── pages/
        │   ├── LandingPage.tsx    # ✅ Done
        │   ├── LoginPage.tsx      # ✅ Done
        │   ├── SignupPage.tsx     # ✅ Done
        │   └── DashboardPage.tsx  # 🚧 Stub only
        ├── App.tsx                # Router — 4 routes wired
        ├── index.css              # Tailwind + global styles
        └── main.tsx               # React entry point
`

---

## Tech Stack

### Frontend
- **Framework:** React 19
- **Build Tool:** Vite 8
- **Language:** TypeScript 6
- **Styling:** Tailwind CSS v4 (via @tailwindcss/vite plugin)
- **Routing:** React Router DOM v7
- **Icons:** Lucide React
- **Linting:** ESLint 10

### Backend
- **Runtime:** Node.js (ESM — import/export)
- **Web Framework:** Express 5
- **Environment:** dotenv
- **Security:** helmet, cors
- **Logging:** morgan
- **Dev Server:** nodemon

---

## What Is NOT Yet Implemented

### Backend (to be built)
- src/ folder structure (routes, controllers, services, types)
- Database integration (MySQL / SQLite)
- All API routes (auth, devices, projects, calibration, audit, assets, users, backup)
- Socket.io for real-time telemetry
- Hardware integration (TCP loggers, Modbus Ethernet, USB Serial)

### Frontend (to be built)
- src/services/ — API client wrappers
- src/types/ — shared TypeScript interfaces
- src/hooks/ — custom hooks (useSocket, useAuth)
- src/context/ — AuthContext (global user/role state)
- Route-level pages: Setup, Qualification, Calibration, Assets, Audit, Reports, Communication
- Admin pages: AdminDashboard, AdminUsers, AdminDevices
- ProtectedRoute wrapper (role-based access)
- Real API wiring for Login, Dashboard live data

---

## Next Steps

1. **Backend DB layer** — Add mysql2 + sqlite3, create src/config/db.ts with MySQL → SQLite fallback
2. **Backend Auth route** — src/routes/auth.ts (login, logout, change-password, RBAC)
3. **Wire Login page** — Connect LoginPage.tsx to /api/auth/login, redirect by role
4. **AuthContext** — Global state for logged-in user, role, token
5. **ProtectedRoute** — Guard all app routes, redirect unauthenticated users
6. **Dashboard wiring** — Connect to /api/devices/live + Socket.io for real-time charts
7. **Build remaining pages** — Setup → Qualification → Calibration → Assets → Audit → Admin
