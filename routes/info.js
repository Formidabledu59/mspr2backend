const express = require('express');
const router = express.Router();
const db = require('../db');

// 1. Liste des pays pour une pandémie donnée
router.get('/pays-par-pandemie/:id_pandemie', (req, res) => {
  const { id_pandemie } = req.params;
  const sql = `
    SELECT DISTINCT p.id_pays, p.nom_pays
    FROM pays p
    JOIN stat_pandemie s ON p.id_pays = s.id_pays
    WHERE s.id_pandemie = ?
  `;
  db.query(sql, [id_pandemie], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// 2. Liste des pandémies pour un pays donné
router.get('/pandemies-par-pays/:id_pays', (req, res) => {
  const { id_pays } = req.params;
  const sql = `
    SELECT DISTINCT p.id_pandemie, p.nom_pandemie
    FROM pandemie p
    JOIN stat_pandemie s ON p.id_pandemie = s.id_pandemie
    WHERE s.id_pays = ?
  `;
  db.query(sql, [id_pays], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// 3. Total de cas par pays pour une pandémie donnée
router.get('/total-par-pays/:id_pandemie', (req, res) => {
  const { id_pandemie } = req.params;
  const sql = `
    SELECT p.nom_pays, SUM(s.nouveaux_cas) AS total_cas
    FROM stat_pandemie s
    JOIN pays p ON s.id_pays = p.id_pays
    WHERE s.id_pandemie = ?
    GROUP BY s.id_pays
  `;
  db.query(sql, [id_pandemie], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// 4. Total de cas pour un pays et une pandémie
router.get('/total-pays-pandemie/:id_pays/:id_pandemie', (req, res) => {
  const { id_pays, id_pandemie } = req.params;
  const sql = `
    SELECT SUM(nouveaux_cas) AS total_cas
    FROM stat_pandemie
    WHERE id_pays = ? AND id_pandemie = ?
  `;
  db.query(sql, [id_pays, id_pandemie], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
});

// 5. Pays triés par taux de contamination (total cas / population)
router.get('/pays-contamination/:id_pandemie', (req, res) => {
  const { id_pandemie } = req.params;
  const sql = `
    SELECT 
      p.nom_pays,
      p.population,
      SUM(s.nouveaux_cas) AS total_cas,
      ROUND(SUM(s.nouveaux_cas) / p.population, 4) AS taux_contamination
    FROM stat_pandemie s
    JOIN pays p ON s.id_pays = p.id_pays
    WHERE s.id_pandemie = ?
    GROUP BY p.id_pays
    HAVING p.population > 0
    ORDER BY taux_contamination ASC
  `;
  db.query(sql, [id_pandemie], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

module.exports = router;
