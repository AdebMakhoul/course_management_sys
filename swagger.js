// swagger.js
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',  // Specify OpenAPI version
    info: {
      title: 'My API',  // API title
      version: '1.0.0', // API version
      description: 'A sample API documentation using Swagger and Express',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Base URL of your API
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to the API routes (where you define your endpoints)
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
