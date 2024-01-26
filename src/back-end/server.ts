import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import {route} from './src/routes/rotas'

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.json())
app.use(route)


app.listen(3333, () => {
  console.log('server is running on port 3333')
})