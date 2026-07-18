const router  = require('express').Router();
const Catalog = require('../models/Catalog');

// GET all catalogs
router.get('/', async (req, res) => {
  try {
    const catalogs = await Catalog.find().sort({ createdAt: -1 });
    res.json({ success: true, result: catalogs });
  } catch (e) { res.status(500).json({ success: false, error: e.message }); }
});

// POST create catalog
router.post('/', async (req, res) => {
  try {
    const catalog = await Catalog.create(req.body);
    res.json({ success: true, result: catalog });
  } catch (e) { res.status(500).json({ success: false, error: e.message }); }
});

// DELETE catalog by id
router.delete('/:id', async (req, res) => {
  try {
    await Catalog.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (e) { res.status(500).json({ success: false, error: e.message }); }
});

module.exports = router;
