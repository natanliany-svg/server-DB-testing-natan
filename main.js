//בסיעתא דשמייא 
import express from 'express'
import { router } from './routs/router.js'
import dotenv from 'dotenv'
dotenv.config()
import { collection, MONGO_DB_URI } from './Db/mongoDb.js'



//const env = config()
const app = express()
const PORT = process.env.PORT || 3000




app.use(express.json())
app.use('/', router)
//app.use('/', //)


app.listen(PORT, (e) => {
    if (e) return console.error('server filed', e.message);
    console.log('the server is running in port', PORT);
})






console.log(MONGO_DB_URI);