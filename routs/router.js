import express from 'express'
import { createBenefit } from '../ctrls/mongoDb.ctrl'



export const router = express.Router()

router.post('/soldiers/:soldierID/benefits' , createBenefit)

router.get('/soldiers/:soldierID/benefits' , )

router.patch('/soldiers/:soldierID/benefits' , )

router.post('/budget' , )

router.get('/budget')

router.







