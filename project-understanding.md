# INNOLOG — Full Project Analysis

## What Is INNOLOG?

**INNOLOG** is a **pharmaceutical/industrial validation & telemetry system** — a GxP-compliant (FDA 21 CFR Part 11) data logging platform used to:
- Monitor real-time temperature/pressure from wireless data loggers and Yokogawa Ethernet instruments
- Run sterilization studies (autoclave validation, F0 lethality calculations)
- Manage calibration workflows
- Enforce electronic signatures and full audit trails
- Export encrypted backup files (.ilset format)

It ships as a **standalone Windows desktop app** (dist/server.exe via pkg) + an **Android tablet app** (InnoLog_Tablet.apk) for field operators.

---

## Repository Structure

`
filessssss new data/          <- Root (the actual production server source)
├── server.js                 <- Main entry point (Express + Socket.io + TCP)
├── package.json              <- Node.js manifest (CJS, targets node18-win-x64)
├── install.bat               <- Windows installer batch
├── launcher.bat / .vbs       <- Silent startup scripts
├── installer.ps1             <- PowerShell-based installer (3 Sep 2026)
├── setup.iss                 <- Inno Setup script (Windows installer)
├── start.bat                 <- Simple start script
├── run_silently.vbs          <- VBS launcher (no console window)
├── innolog.db                <- Empty SQLite DB placeholder
│
├── config/
│   ├── loggerConfig.js       <- Port settings + MySQL/SQLite config
│   ├── db.js                 <- DB abstraction layer (MySQL + SQLite fallback)
│   └── backupHelper.js       <- AES-256-CBC encrypted file export helper
│
├── hardware/
│   ├── loggerServer.js       <- TCP socket server (wireless data loggers)
│   ├── ethernetPoller.js     <- Modbus TCP poller (Yokogawa GP10/GX10)
│   └── serialPoller.js       <- USB serial reader (IRTD reference sensor)
│
├── routes/
│   ├── auth.js               <- Login, logout, user CRUD, password policy
│   ├── users.js              <- User management + electronic signature verify
│   ├── devices.js            <- Logger registration, live readings, GxP updates
│   ├── settings.js           <- Study setup CRUD + approval workflows
│   ├── projects.js           <- Study project lifecycle (create/start/stop/report)
│   ├── calibration.js        <- Calibration records + 3-point run management
│   ├── audit.js              <- Audit trail read/write
│   ├── assets.js             <- Asset (equipment) CRUD
│   └── backup.js             <- Import/export encrypted backups
│
├── public/
│   ├── login.html            <- Login page
│   ├── splash.html           <- Splash/loading screen
│   ├── logo.png / favicon.ico
│   ├── admin/
│   │   ├── dashboard.html         <- Admin dashboard
│   │   ├── master_dashboard.html  <- Master Admin dashboard
│   │   ├── users.html             <- User management UI
│   │   ├── devices.html           <- (EMPTY - not yet implemented)
│   │   ├── equipment.html         <- (EMPTY - not yet implemented)
│   │   └── projects.html          <- (EMPTY - not yet implemented)
│   ├── users/
│   │   ├── dashboard.html         <- Operator dashboard
│   │   ├── setup.html             <- Study setup configuration page
│   │   ├── qualification.html     <- Validation/qualification workflow
│   │   ├── calibration.html       <- Calibration workflow
│   │   ├── calibration_report.html
│   │   ├── asset_dashboard.html   <- Asset management
│   │   ├── audit_trail.html       <- Audit log viewer
│   │   ├── audit_report.html
│   │   ├── communication.html     <- Device communication settings
│   │   └── report.html            <- Study report viewer
│   └── js/
│       ├── socket.io.js           <- Socket.io client
│       ├── chart.js               <- Chart.js library
│       ├── Recharts.js            <- Recharts (React charts)
│       ├── react.production.min.js
│       ├── react-dom.production.min.js
│       ├── babel.min.js           <- Babel in-browser transpiler
│       ├── tailwind.min.js        <- Tailwind CSS CDN
│       ├── global_alert_listener.js <- Real-time alert system
│       └── inactivity_timeout.js  <- Auto-logout on inactivity
│
├── dist/
│   ├── server.exe             <- Compiled standalone Windows executable (57 MB)
│   ├── database.sqlite        <- Production SQLite database
│   └── InnoLog_Tablet.apk    <- Android app (~5.5 MB)
│
└── scratch/
    ├── hardware_simulator.js  <- TCP telemetry simulator for dev/testing
    └── seed_projects.js       <- DB seeding script
`

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Runtime** | Node.js 18 (CommonJS - equire) |
| **Web Framework** | Express 5 |
| **Real-time** | Socket.io 4.8 (WebSocket push to browsers) |
| **Database (primary)** | MySQL 2 (connection pool, 10 connections) |
| **Database (fallback)** | SQLite3 (auto-switches if MySQL unavailable) |
| **Hardware Protocols** | Modbus TCP (Ethernet), Custom CSV/TCP (wireless), USB Serial |
| **Frontend** | Vanilla HTML/CSS + Tailwind CDN + React (in-browser via Babel) |
| **Packaging** | pkg → single Windows .exe |
| **Installer** | Inno Setup (.iss) + PowerShell (installer.ps1) |
| **Security** | AES-256-CBC for backup encryption (Node built-in crypto) |

---

## Server Entry Point — server.js

The server does **four things** on startup (sequentially after DB init):

`
1. db.initDb()           -> Tries MySQL, falls back to SQLite
2. startTcpServer(io)    -> Wireless logger TCP receiver on port 5000
3. startEthernetPoller() -> Modbus TCP poller to Yokogawa GP10 at 192.168.1.100:502
4. httpServer.listen()   -> Web UI + REST API on port 4000
`

### API Route Map

| Mount Prefix | Route File | Purpose |
|-------------|-----------|---------|
| /api/auth | outes/auth.js | Login, logout, user CRUD, password changes |
| /api/devices | outes/devices.js | Logger registration, readings, live status |
| /api/setup | outes/settings.js | Study setup CRUD, approval/signing workflows |
| /api/projects | outes/projects.js | Project lifecycle: create -> start -> record -> stop -> results |
| /api/telemetry | outes/projects.js | (same as projects — compatibility alias) |
| /api/calibration | outes/calibration.js | Calibration records + 3-point calibration runs |
| /api/audit | outes/audit.js | Read/write audit trail |
| /api/assets | outes/assets.js | Equipment asset registry |
| /api/backup | outes/backup.js | Import/export encrypted .ilset backups |
| /api/users | outes/users.js | User CRUD + electronic signature verification |

---

## Database Schema (17 Tables)

| Table | Purpose |
|-------|---------|
| users | Login credentials, roles, lock status, first-login flag |
| system_setup | System-wide config (JSON blob, backup path, etc.) |
| devices | Registered loggers (wireless + Yokogawa Ethernet) |
| sensor_readings | Real-time telemetry (temp, pressure, battery, channel_data JSON) |
| calibration_records | Individual calibration verification points |
| calibration_runs | Full 3-point calibration dataset snapshots (JSON) |
| udit_trail | Immutable GxP audit log (every action timestamped) |
| study_setups | Configurable study templates (JSON blob with equipment/sensors/groups) |
| study_setup_versions | Version snapshots for approved setups (21 CFR traceability) |
| projects | Study runs linked to a setup |
| study_executions | Individual recording sessions per project |
| study_results | F0 value, min/max temp, PASSED/FAILED per execution |
| electronic_signatures | 21 CFR Part 11 signing records with checksum |
| pproval_workflows | Review/approve flows for study setups |
| ssets | Equipment registry (autoclave IDs, manufacturer, model) |
| ole_permissions | RBAC: maps role names to permission names |
| user_history | Change log per user account |

---

## Hardware Integration Details

### 1. Wireless Loggers -> TCP Server (loggerServer.js)
- Listens on **port 5000** (TCP)
- Loggers connect and stream CSV lines: DEV_01,121.45,2.12,98,90
  - Format: device_id, temperature, pressure, battery, signal_strength
- Line-buffered parsing (handles split TCP chunks)
- Auto-registers unknown devices on first connection
- 6-second inactivity watchdog -> marks device offline, logs to audit trail
- Broadcasts live_reading and device_status events via Socket.io

### 2. Yokogawa GP10/GX10 -> Ethernet Poller (ethernetPoller.js)
- Connects to **192.168.1.100:502** (Modbus TCP)
- **Auto-tunes** across 13 Modbus profiles (FC03/FC04, unit IDs 0/1/247/255, offsets 0/100/200)
- Reads up to 30 channels across 3 expansion slots (10 ch/slot x 3)
- Channel data format: IEEE 754 float32 from register pairs
- Simultaneously reads **USB IRTD** reference sensor via serialPoller.js
- Broadcasts multi-channel live_reading via Socket.io

### 3. USB Serial IRTD (serialPoller.js)
- Reads reference temperature from USB serial port
- IRTD = Infrared/Resistance Thermometer Device (calibration reference)
- Used alongside Modbus poller for side-by-side calibration comparison

---

## Key Business Logic

### Authentication & RBAC
- Roles: Operator, QA, Manager, System Administrator, Master Administrator
- ⚠️ Passwords stored as **plain text** (no bcrypt hashing)
- 3-consecutive-failed-attempt -> auto account lock
- First login -> forced password change
- Password policy enforced: min 8 chars, uppercase, lowercase, digit, special char
- master_admin bypasses audit trail logging entirely

### Electronic Signatures (21 CFR Part 11)
- Any significant action requires re-entering username + password
- Stored in electronic_signatures table with checksum field
- Verification success -> resets failed attempt counter
- Allowed signatories: QA, Manager, System Administrator, Master Administrator

### Study Lifecycle (State Machine)
`
SETUP:   DRAFT -> (approval with e-signature) -> PUBLISHED
PROJECT: CREATED -> IN_PROGRESS -> COMPLETED
RUN:     RUNNING -> COMPLETED (auto F0 calc + PASSED/FAILED)
`

### F0 Lethality Calculation (on ecord/stop)
`js
// For each sensor reading during the session:
if (temperature >= 100) {
  f0 += Math.pow(10, (temperature - 121.11) / 10.0) * (1 / 60.0);
}
// Pass threshold: F0 >= 12 minutes
const status = f0 >= 12.0 ? 'PASSED' : 'FAILED';
`

### Backup / Export System
- Auto-export triggered on: setup save, calibration run save, project completion
- Files encrypted with **AES-256-CBC**, saved as .ilset extension
- Encryption key: crypto.scryptSync('InnologSecureKey2026!', 'salt', 32)
- Default backup path: C:\Innolog_Backups
- Path configurable via system_setup table in DB

---

## Deployment Details

| Item | Value |
|------|-------|
| HTTP Port | 4000 (env: PORT) |
| TCP Receiver Port | 5000 (env: TCP_PORT) |
| Modbus Target | 192.168.1.100:502 (settable via UI) |
| MySQL Host | localhost (env: DB_HOST) |
| MySQL DB | innolog (env: DB_NAME) |
| SQLite Fallback | ./database.sqlite |
| Packaged Exe | dist/server.exe — 57MB self-contained Windows binary |
| Installer | Inno Setup + installer.ps1 PowerShell |
| Silent Launch | launcher.vbs / un_silently.vbs |
| Android App | dist/InnoLog_Tablet.apk (5.5 MB) |

---

## Comparison: ilessssss new data vs d:\INNOLOG Repo

| Aspect | d:\INNOLOG (git repo, branch ui-2) | ilessssss new data |
|--------|-----------------------------------------|----------------------|
| Purpose | React/Vite UI rewrite in progress | **Production server (working)** |
| Frontend | React 19 + Vite + TypeScript + Tailwind v4 | Vanilla HTML + Tailwind CDN + React via Babel |
| Backend | ackend/server.js (ESM, no DB, no hardware) | server.js (CJS, full MySQL+SQLite, hardware) |
| Hardware | Not implemented | TCP + Modbus TCP + USB Serial |
| Routes folder | 11 empty subdirectories | 9 fully implemented route files |
| DB Schema | None | 17 tables, fully seeded |
| Status | **Work in progress** | **Production-deployed .exe** |

> The ilessssss new data folder IS the real, deployed system.
> The d:\INNOLOG repo is a modern rewrite of the UI that needs to eventually incorporate (or proxy to) this production backend.

---

## Known Gaps & Issues

1. **Empty admin pages**: dmin/devices.html, dmin/equipment.html, dmin/projects.html are all 0 bytes
2. **No session tokens/JWT**: Auth is stateless — no server-side session validation after login
3. **Plain-text passwords**: No bcrypt or hashing — security risk
4. **d:\INNOLOG\routes\**: All 11 subdirectories are empty — route work not started in the new repo
5. **hardware/serialPoller.js**: Most recently modified file (9 Sep 2026) — actively being developed
6. **outes/backup.js**: 30KB, complex — handles full import/export restore logic

---

*Analysis generated: 2026-09-16*
