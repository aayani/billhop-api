import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import swaggerUi from 'swagger-ui-express'

import { translateRouter } from './routes'

const swaggerDocument = require('../swagger.json')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/translate', translateRouter)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

export default app
