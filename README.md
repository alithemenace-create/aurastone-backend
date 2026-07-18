# Aura Stone — Backend API

Node.js + Express + MongoDB backend for the Aura Stone luxury showroom website.

## API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | /api/slabs | List all stone slabs |
| POST | /api/slabs | Add a new slab |
| DELETE | /api/slabs/:id | Remove a slab |
| GET | /api/catalogs | List all PDF catalogues |
| POST | /api/catalogs | Add a catalogue |
| DELETE | /api/catalogs/:id | Remove a catalogue |
| GET | /api/appointments | List all showroom appointments |
| POST | /api/appointments | Book an appointment |
| DELETE | /api/appointments/:id | Delete an appointment |
| GET | /api/cms | Get hero CMS settings |
| POST | /api/cms | Update hero CMS settings |

## Deployment Guide

### Step 1 — MongoDB Atlas (database)
1. Go to mongodb.com/atlas → sign up free
2. Create a free M0 cluster
3. Create a database user (save username & password)
4. Network Access → Add IP Address → Allow Access from Anywhere
5. Connect → Drivers → copy the connection string

### Step 2 — GitHub (upload code)
1. Go to github.com → New repository → name it `aurastone-backend`
2. Upload ALL files from this folder (server.js and src/ must be at the top level)
3. Confirm you can see `server.js` directly in the repo (not inside a subfolder)

### Step 3 — Render (deploy backend)
1. Go to render.com → New → Web Service
2. Connect your GitHub → select `aurastone-backend`
3. Build Command: `npm install`
4. Start Command: `npm start`
5. Add Environment Variable:
   - Key: `MONGO_URI`
   - Value: your Atlas connection string (change `myFirstDatabase` to `aurastone`)
6. Click Deploy — wait 2-3 minutes
7. Copy your live URL e.g. `https://aurastone-backend.onrender.com`

### Step 4 — Update index.html
Open `index.html`, find this line near the top of the `<script>` section:

```js
const API_BASE = "http://localhost:4000/api";
```

Replace with your Render URL:

```js
const API_BASE = "https://aurastone-backend.onrender.com/api";
```

### Step 5 — Host frontend on Netlify
1. Go to netlify.com → sign up free
2. Drag and drop `index.html` onto the dashboard
3. Done — you get a live URL instantly!

## Environment Variables

Copy `.env.example` to `.env` for local testing:

```
MONGO_URI=mongodb+srv://user:pass@cluster0.xxxxx.mongodb.net/aurastone?retryWrites=true&w=majority
PORT=4000
FRONTEND_URL=*
```
