import express from 'express'
import { createBenefit, getBenefits, updateBenefit } from '../ctrls/mongoDb.ctrl.js'
import { addBudget, getTransactions } from '../ctrls/supabase.ctrl.js'
import { getBudgetById, getBudgetsByUnit, getTransactionsByBudgetId } from '../DAL/dal.supabase.js'







export const router = express.Router()

router.post('/soldiers/:soldierID/benefits' , createBenefit)

router.get('/soldiers/:soldierID/benefits' , getBenefits ,)

router.patch('/soldiers/:soldierID/benefits' ,updateBenefit)


router.post('/budget' ,addBudget )

// router.get('/budget' )

// router.get('/budget/:id/transactions'  )

// router.post('budget/:id/spend' )




