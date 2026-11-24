# Full-Stack React & Express Academic Portfolio
## Head of Department Dr. D. B. Bharti (MBA)

A modern full-stack web portfolio built with **React** (Vite) and an **Express.js REST API**, specifically designed for **Dr. D. B. Bharti, Head of Department — Master of Business Administration (MBA)**.

---

## ⚡ How to Run

### **Single Command (Starts Both Backend & Frontend)**
In the root directory (`d:\Incubation center project`):
```bash
npm run dev
```

This single command automatically starts:
- 🚀 **Express API Server** on [http://localhost:5000](http://localhost:5000)
- ⚛️ **React Frontend (Vite)** on [http://localhost:3000](http://localhost:3000)

Open [http://localhost:3000](http://localhost:3000) in your browser to view and interact with the portfolio.

---

## 🏛️ Architecture & Technologies

- **Frontend:** **React 18** + **Vite**
  - Component-driven architecture (Navbar, Hero, LeadershipPillars, Experience, Education, Achievements, IncubationHub, Publications, Contact, LightboxModal, AddAchievementModal).
  - Modern, stylish light-theme color palette (crisp whites, subtle slates, executive royal navy, warm laurel gold accents).
  - Bold, authoritative typography (`Outfit` and `Plus Jakarta Sans`).
  - Interactive photo lightbox and category filter tabs.
  - Interactive **"+ Add New Achievement & Picture"** dynamic modal for HOD/admin to upload new achievement photos and milestones directly in real-time.
- **Backend:** **Express.js (Node.js)**
  - RESTful API endpoints for profile, experience, education, achievements, and publications.
  - **Multer** file upload pipeline for achievement photos (`/server/uploads/`).
  - Persistent data store in `/server/data/portfolioData.json`.
  - Serves static assets and production React build (`client/dist`) simultaneously on port `5000`.

---

## 📁 Project Structure

```text
d:\Incubation center project\
│
├── dev.js                         # Concurrent runner for Express + React
├── package.json                   # Root scripts ("dev": "node dev.js")
├── README.md                      # Documentation & instructions
│
├── server\                        # Express.js REST API Backend
│   ├── server.js                  # Express API server, CORS, Multer uploads, & static routing
│   ├── package.json               # Express dependencies (express, cors, multer)
│   ├── data\
│   │   └── portfolioData.json     # Persistent database for Dr. Bharti's portfolio
│   └── uploads\                   # Stored achievement photos uploaded via API
│
└── client\                        # React Frontend (Vite)
    ├── package.json               # React dependencies
    ├── vite.config.js             # Vite configuration with API proxy to port 5000
    ├── index.html                 # HTML shell with Google Fonts
    ├── public\
    │   ├── favicon.svg            # DB monogram browser icon
    │   └── images\                # SVG/JPG/PNG achievement photo assets
    └── src\
        ├── components\
        │   ├── Navbar.jsx               # Navigation bar & mobile menu
        │   ├── Hero.jsx                 # HOD Profile, badges, stats, Print CV button
        │   ├── LeadershipPillars.jsx    # Academic vision & governance pillars
        │   ├── Experience.jsx           # Leadership & academic career timeline
        │   ├── Education.jsx            # Ph.D., MBA, and Executive qualifications
        │   ├── Achievements.jsx         # Achievement gallery with category filtering
        │   ├── LightboxModal.jsx        # Full-size image preview lightbox
        │   ├── AddAchievementModal.jsx  # Form & file uploader for new achievements
        │   ├── IncubationHub.jsx        # Startup mentorship & Incubation Center showcase
        │   ├── Publications.jsx         # Scopus research papers & textbooks
        │   ├── Contact.jsx              # Chamber info & meeting request form
        │   └── Footer.jsx               # Institutional footer & back-to-top button
        ├── data\
        │   └── initialData.js           # Instant fallback data
        ├── App.jsx                      # Main React application
        ├── index.css                    # Professional light-theme stylesheet
        └── main.jsx                     # React DOM entry point
```

---

## 🔌 Available npm Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts both the Express API (port 5000) and the React frontend (port 3000) concurrently |
| `npm run build` | Compiles the React frontend into production-ready static assets in `client/dist` |
| `npm start` | Runs the full stack services |

---

## 📸 Adding Achievement Pictures in React

### Method A: Using the Interactive UI (Easiest)
1. Run `npm run dev`.
2. Scroll to the **Distinguished Achievements** section.
3. Click the **"+ Add New Achievement & Picture"** button.
4. Fill in the title, category, date, and upload the photograph (JPG, PNG, WebP).
5. Click **"Save Achievement & Picture"** — Express saves the image to `server/uploads/` and updates `portfolioData.json` instantly.

### Method B: Dropping Static Images
Place image files in `client/public/images/` and reference them in `server/data/portfolioData.json`.
