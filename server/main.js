import express from 'express'
import getData from './routes/getData.js'

const app = express()

app.use(express.json())

app.get('/app', getData)

app.listen(3000, () => console.log('Server running on 3000..'))
