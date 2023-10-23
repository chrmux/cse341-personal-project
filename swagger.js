const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Cars Client API'
  },
  host: 'cse341-personal-project-ynwi.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js');
// });
