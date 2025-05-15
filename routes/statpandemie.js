const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', (req, res) => {
  const { countryId, typeId, startDate, endDate } = req.body;

  let query = `
    SELECT 
      stat_pandemie.nouveaux_cas,
      stat_pandemie.nouveaux_deces,
      stat_pandemie.nouveaux_gueris,
      stat_pandemie.cas_actifs,
      stat_pandemie.id_pays,
      pandemie.nom_pandemie,
      stat_pandemie.id_pandemie,
      pays.nom_pays,
      stat_pandemie.date
    FROM stat_pandemie
    JOIN pays ON stat_pandemie.id_pays = pays.id_pays
    JOIN pandemie ON stat_pandemie.id_pandemie = pandemie.id_pandemie
    WHERE 1=1
  `;

  const params = [];

  if (countryId) {
    query += ' AND stat_pandemie.id_pays = ?';
    params.push(countryId);
  }
  if (typeId) {
    query += ' AND stat_pandemie.id_pandemie = ?';
    params.push(typeId);
  }
  if (startDate) {
    query += ' AND stat_pandemie.date >= ?';
    params.push(startDate);
  }
  if (endDate) {
    query += ' AND stat_pandemie.date <= ?';
    params.push(endDate);
  }

  query += ' ORDER BY stat_pandemie.date';

  db.query(query, params, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Erreur lors de la récupération des statistiques', error: err });
    }
    res.json(results);
  });
});

module.exports = router;
