const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM pays', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  db.query('SELECT * FROM pays WHERE id_pays = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result[0]);
  });
});

router.post('/', (req, res) => {
  db.query('INSERT INTO pays SET ?', req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ id: result.insertId, ...req.body });
  });
});

router.put('/:id', (req, res) => {
  db.query('UPDATE pays SET ? WHERE id_pays = ?', [req.body, req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Mise à jour réussie' });
  });
});

router.delete('/:id', (req, res) => {
  db.query('DELETE FROM pays WHERE id_pays = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Suppression réussie' });
  });
});

module.exports = router;
