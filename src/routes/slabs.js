const router = require('express').Router();
const Slab   = require('../models/Slab');

// GET all slabs (optional ?category=Marble filter)
router.get('/', async (req, res) => {
  try {
    const filter = req.query.category && req.query.category !== 'all'
      ? { category: req.query.category } : {};
    const slabs = await Slab.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, result: slabs });
  } catch (e) { res.status(500).json({ success: false, error: e.message }); }
});

// POST create slab
router.post('/', async (req, res) => {
  try {
    const slab = await Slab.create(req.body);
    res.json({ success: true, result: slab });
  } catch (e) { res.status(500).json({ success: false, error: e.message }); }
});

// DELETE slab by id
router.delete('/:id', async (req, res) => {
  try {
    await Slab.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (e) { res.status(500).json({ success: false, error: e.message }); }
});

module.exports = router;
