const express = require('express');
const cors = require('cors');
const app = express();
const pandemieRoutes = require('./routes/pandemie');
const paysRoutes = require('./routes/pays');
const statsRoutes = require('./routes/stats');
const statPandemieRoutes = require('./routes/statpandemie');
const infoRouter = require('./routes/info');
const setupSwagger = require('./swagger'); 

const isProduction = process.env.NODE_ENV === 'Prod';
const baseUrl = isProduction ? process.env.URL_PROD : process.env.URL_DEV; // URL selon l'environnement

app.use(cors());
app.use(express.json());

app.use('/pandemie', pandemieRoutes);
app.use('/pays', paysRoutes);
app.use('/stat_pandemie', statsRoutes);
app.use('/statpandemie', statPandemieRoutes);
app.use('/info', infoRouter);

setupSwagger(app);

//------------------------------Site Web------------------------------//
// Servir les fichiers statiques du dossier "site"
const path = require('path');
app.use(express.static(path.join(__dirname, 'site')));

// Rediriger "/" vers "index.html"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'site', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${baseUrl}:${PORT}`);
});
