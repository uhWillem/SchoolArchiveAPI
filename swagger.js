console.log('Start swaggerAutogen')

const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/studentRoutes.js']
const specFile = require('./swaggerSpec.json')

swaggerAutogen(outputFile, endpointsFiles, specFile)
console.log('End swaggerAutogen')
