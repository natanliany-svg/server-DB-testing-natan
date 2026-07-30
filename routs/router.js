import express from 'express'
import { createBenefit, getBenefits } from '../ctrls/mongoDb.ctrl.js'
import { addBudget, getTransactions } from '../ctrls/supabase.ctrl.js'
import { getBudgetById, getBudgetsByUnit, getTransactionsByBudgetId } from '../DAL/dal.supabase.js'







export const router = express.Router()

router.post('/soldiers/:soldierID/benefits' , createBenefit)

router.get('/soldiers/:soldierID/benefits' , getBenefits ,)

// router.patch('/soldiers/:soldierID/benefits' , getTransactions )
router.get('/soldiers/:soldierID/benefits' , getTransactions )

router.post('/budget' ,addBudget )

// router.get('/budget' , getBudgetsByUnit , getBudgetById)

// router.get('/budget/:id/transaction' , getTransactionsByBudgetId ,)

// router.post('budget/:id/spend')




