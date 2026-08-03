import express from 'express'
import { createBenefit, getBenefits, updateBenefit } from '../ctrls/mongoDb.ctrl.js'
import { addBudget, getBudgetStatus, getTransactions } from '../ctrls/supabase.ctrl.js'
import { getBudgetById, getBudgetsByUnit, getTransactionsByBudgetId } from '../DAL/dal.supabase.js'







export const router = express.Router()

router.post('/soldiers/:soldierId/benefits' , createBenefit)

router.get('/soldiers/:soldierId/benefits' , getBenefits )

router.patch('/soldiers/:soldierId/benefits' ,updateBenefit)


router.post('/budget' ,addBudget )

router.get('/budget', getBudgetStatus)

// router.get('/budget/:id/transactions'  )

// router.post('budget/:id/spend' )




