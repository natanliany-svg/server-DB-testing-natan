//בסיעתא דשמייא 
import express from 'express'
import { router } from './routs/router.js'
import { config } from 'dotenv'
import { MONGO_DB_URI } from './Db/mongoDb.js'


const env = config()
const app = express()
const PORT = process.env.PORT || 3000

app.use(config)
app.use(express.json())
app.use('/', router)

app.listen(PORT, (e) => {
    if (e) return console.error('server filed', e.message);
    console.log('the server is running in port', PORT);
})




console.log(MONGO_DB_URI);