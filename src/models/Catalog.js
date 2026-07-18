const mongoose = require('mongoose');

const catalogSchema = new mongoose.Schema({
  title:    { type: String, required: true },
  image:    { type: String, default: '' },
  url:      { type: String, default: '' },
  category: { type: String, default: 'Specification Booklet' }
}, { timestamps: true });

module.exports = mongoose.model('Catalog', catalogSchema);
