const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name:      { type: String, required: true },
  email:     { type: String, default: '' },
  phone:     { type: String, default: '' },
  date:      { type: String, required: true },
  time:      { type: String, required: true },
  focus:     { type: String, default: '' },
  notes:     { type: String, default: '' },
  status:    { type: String, default: 'Pre-Confirmed' },
  timestamp: { type: String, default: () => new Date().toISOString() }
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
