//בסיעתא דשמייא 

import { getWelfareRecordBySoldierId } from "../DAL/dal.mongoDb.js"
import { createBudget, createTransaction, getAllBudgets, getBudgetById, getBudgetsByUnit, getTransactionsByBudgetId } from "../DAL/dal.supabase.js"


export async function addBudget(req, res) {
    try {
    const { unit, benefitType, month, allocatedAmount } = req.body
    console.log('add budgt post', unit, month)

    const allBudgets = await getBudgetsByUnit(unit)
    const exists = allBudgets && allBudgets.some(b => b.benefitType === benefitType && b.month === month)

    if (exists) {
        console.log('bugdet exist alrdy')
        return res.status(409).json({ error: 'budget already exists' })
    }

    const newBudget = await createBudget({ unit, benefitType, month, allocatedAmount })
    return res.status(201).json(newBudget)

    } catch (e) {
    console.error(e.message)
    return res.status(500).json({ error: 'server error' })
    }
}

export async function getTransactions(req, res) {
    try {
    const budgetId = req.params.id
    console.log('get trnsctions for id', budgetId)

    const budget = await getBudgetById(budgetId)
    if (!budget) {
        return res.status(404).json({ error: 'budget not found' })
    }

    const trans = await getTransactionsByBudgetId(budgetId)
    return res.status(200).json(trans || [])

    } catch (e) {
    console.error(e.message)
    return res.status(500).json({ error: 'server error' })
    }
}



export async function getBudgetStatus(req,res) {
    try {
        const unit = req.query.unit
        let budgets = unit ? await getBudgetsByUnit(unit) : await getAllBudgets()
        if (!budgets) return res.status(200).json([])
            const result = []
        for (let budget of budgets) {
            const transs = await getTransactionsByBudgetId(budget.id) || []
            let spnt = 0

            for (let t of transs) {
                spnt += t.amount
            }
            result.push({
                ...budget,
                spentAmount: spnt,
                remainingAmount: budget.allocatedAmount -spnt
            })
        }
        return res.status(200).json(result)
    } catch (e) {
        console.error(e.message);
        return res.status(500).json({error:'serverr error'})
    }
}


