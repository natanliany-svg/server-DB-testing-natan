import express from 'express'
import { createBenefit, getBenefits } from '../ctrls/mongoDb.ctrl.js'




export const router = express.Router()

router.post('/soldiers/:soldierID/benefits' , createBenefit)

router.get('/soldiers/:soldierID/benefits' , getBenefits)

// router.patch('/soldiers/:soldierID/benefits' , )

// router.post('/budget' , )

// router.get('/budget')

// router.



