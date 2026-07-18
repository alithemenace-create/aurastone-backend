const mongoose = require('mongoose');

const slabSchema = new mongoose.Schema({
  name:     { type: String, required: true },
  category: { type: String, default: 'Marble' },
  origin:   { type: String, default: 'Italy' },
  rarity:   { type: String, default: '' },
  image:    { type: String, default: '' },
  desc:     { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Slab', slabSchema);
