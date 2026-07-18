const mongoose = require('mongoose');

const cmsSchema = new mongoose.Schema({
  key:      { type: String, default: 'hero', unique: true },
  tag:      { type: String, default: 'ULTRA-PREMIUM MONOLITHIC ART' },
  title:    { type: String, default: 'The Ultimate Sovereign Stone.' },
  subtitle: { type: String, default: 'Imported directly from Carrara and high-elevation Tuscan quarries.' },
  heroImg:  { type: String, default: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000' }
}, { timestamps: true });

module.exports = mongoose.model('CMS', cmsSchema);
