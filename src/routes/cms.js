const router = require('express').Router();
const CMS    = require('../models/CMS');

// GET hero CMS settings
router.get('/', async (req, res) => {
  try {
    let doc = await CMS.findOne({ key: 'hero' });
    if (!doc) doc = await CMS.create({ key: 'hero' });
    res.json({ success: true, result: doc });
  } catch (e) { res.status(500).json({ success: false, error: e.message }); }
});

// POST update hero CMS settings
router.post('/', async (req, res) => {
  try {
    const doc = await CMS.findOneAndUpdate(
      { key: 'hero' },
      { ...req.body, key: 'hero' },
      { upsert: true, new: true }
    );
    res.json({ success: true, result: doc });
  } catch (e) { res.status(500).json({ success: false, error: e.message }); }
});

module.exports = router;
