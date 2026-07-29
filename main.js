//בסיעתא דשמייא 
import express from 'express'


const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
//app.use('/',router)

app.listen(PORT ,(e) => {
    if (e) return console.error('server filed',e.message);
    console.log('server is running in port' , PORT);
})




