const express = require('express');
const cors = require('cors');
const app = express();
const pandemieRoutes = require('./routes/pandemie');
const paysRoutes = require('./routes/pays');
const statsRoutes = require('./routes/stats');
const statPandemieRoutes = require('./routes/statpandemie');
const setupSwagger = require('./swagger'); // ✅ ici

app.use(cors());
app.use(express.json());

app.use('/pandemie', pandemieRoutes);
app.use('/pays', paysRoutes);
app.use('/stat_pandemie', statsRoutes);
app.use('/statpandemie', statPandemieRoutes);

// ✅ ici
setupSwagger(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
