const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/studentRoutes.js']

swaggerAutogen(outputFile, endpointsFiles)