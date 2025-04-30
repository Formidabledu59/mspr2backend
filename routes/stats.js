const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM stat_pandemie', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  db.query('SELECT * FROM stat_pandemie WHERE id_stat = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result[0]);
  });
});

router.post('/', (req, res) => {
  db.query('INSERT INTO stat_pandemie SET ?', req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ id: result.insertId, ...req.body });
  });
});

router.put('/:id', (req, res) => {
  db.query('UPDATE stat_pandemie SET ? WHERE id_stat = ?', [req.body, req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Mise à jour réussie' });
  });
});

router.delete('/:id', (req, res) => {
  db.query('DELETE FROM stat_pandemie WHERE id_stat = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Suppression réussie' });
  });
});

module.exports = router;
