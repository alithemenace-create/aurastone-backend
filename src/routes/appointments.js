const router      = require('express').Router();
const Appointment = require('../models/Appointment');

// GET all appointments
router.get('/', async (req, res) => {
  try {
    const appts = await Appointment.find().sort({ createdAt: -1 });
    res.json({ success: true, result: appts });
  } catch (e) { res.status(500).json({ success: false, error: e.message }); }
});

// POST create appointment (with double-booking protection)
router.post('/', async (req, res) => {
  try {
    const { date, time } = req.body;
    const conflict = await Appointment.findOne({ date, time });
    if (conflict) {
      return res.status(409).json({ success: false, error: 'Slot already booked.' });
    }
    const appt = await Appointment.create(req.body);
    res.json({ success: true, result: appt });
  } catch (e) { res.status(500).json({ success: false, error: e.message }); }
});

// DELETE appointment by id
router.delete('/:id', async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (e) { res.status(500).json({ success: false, error: e.message }); }
});

module.exports = router;
