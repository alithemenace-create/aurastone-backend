require('dotenv').config();
const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');

const app = express();

// ── Middleware ──────────────────────────────────────────────────
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization']
}));
app.use(express.json());

// ── Routes ──────────────────────────────────────────────────────
app.use('/api/slabs',        require('./src/routes/slabs'));
app.use('/api/catalogs',     require('./src/routes/catalogs'));
app.use('/api/appointments', require('./src/routes/appointments'));
app.use('/api/cms',          require('./src/routes/cms'));

// ── Health check ────────────────────────────────────────────────
app.get('/', (_req, res) => res.json({ status: 'Aura Stone API is running ✓' }));

// ── MongoDB connect + seed ───────────────────────────────────────
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('✓ MongoDB connected');
    await require('./src/seed')();
    app.listen(PORT, () => console.log(`✓ Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('✗ MongoDB connection failed:', err.message);
    process.exit(1);
  });
