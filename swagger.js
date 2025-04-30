// swagger.js
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API MSPR Pandémie',
      version: '1.0.0',
      description: 'Documentation complète de l\'API REST pour la gestion des pandémies',
    },
    servers: [
      {
        url: `${process.env.URL}`,
      },
    ],
  },
  apis: ['./swagger-docs.js'], // Les fichiers contenant les commentaires Swagger
};

const swaggerSpec = swaggerJSDoc(options);

function setupSwagger(app) {
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = setupSwagger;
