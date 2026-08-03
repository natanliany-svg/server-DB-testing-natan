import { createWelfareRecord, getWelfareRecordBySoldierId, updateWelfareRecord } from "../DAL/dal.mongoDb.js";
import { error } from 'node:console'


function isPrime(num) {
    if (num <= 1) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
    }
    return true
}

export async function createBenefit(req, res) {
    try {
        const soldierId = req.params.soldierId
        const { unit, benefitType, decisionReason, details, budgetApproved } = req.body
        console.log('strating creat benefit for', soldierId) 

        const exist = await getWelfareRecordBySoldierId(soldierId)
        if (exist) {
    console.log('allrdy exist stoping') 
            return res.status(409).json({ error: 'record already exists' })
        }

    
const newRecord = {
            soldierId: Number(soldierId),
            unit,
            currentBenefitType: benefitType,
            history: [{

                startDate: new Date().toISOString(),
                endDate: null,
                decisionReason,
                budgetApproved,
                benefitType,
                details
            }]
        }
        await createWelfareRecord(newRecord)
        return res.status(201).json(newRecord)
    
    } catch (e) {
        console.error(e.message);
        return res.status(500).json({ error: 'srver error' })
    }
}

export async function getBenefits(req, res) {
    try {
    const soldierId = req.params.soldierId
    console.log('get benfits runing for soldir:', soldierId)

    const record = await getWelfareRecordBySoldierId(soldierId)

    if (!record) {
        return res.status(404).json({ error: 'not found' })
    }

    return res.status(200).json(record)
    } catch (e) {
    console.error(e.message)
    return res.status(500).json({ error: 'server error' })
    }
}





export async function updateBenefit(req, res) {
    try {
    const soldierId = req.params.soldierId
    const { benefitType, details, decisionReason, budgetApproved } = req.body
    
    console.log('ptach requst check', req.body) 

    const record = await getWelfareRecordBySoldierId(soldierId)
    if (!record) {
        return res.status(404).json({ error: 'not found' })
    }

    const today = new Date()
    
    if (today.getDate() === 1) {
        const startOfYear = new Date(today.getFullYear(), 0, 1)
        const diffTime = Math.abs(today - startOfYear)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        console.log('day count is', diffDays) 

        if (isPrime(diffDays)) {
        console.log('prime numb detected cancel updat') 
        return res.status(200).json({
            ...record,
            reverted: true,
            reason: 'שר האוצר קם על הרגל השמאליתת'
        })
        }
    }

    let history = record.history || []
    if (history.length > 0) {
        history[history.length - 1].endDate = today.toISOString()
    }

    history.push({
        startDate: today.toISOString(),
        endDate: null,
        decisionReason,
        budgetApproved,
        benefitType,
        details
    })

    const updateDoc = {
        currentBenefitType: benefitType,
        history: history
    }

    await updateWelfareRecord(soldierId, updateDoc)
    record.currentBenefitType = benefitType
    record.history = history

    return res.status(200).json(record)

    } catch (e) {
    console.error(e.message)
    return res.status(500).json({ error: 'server error' })
    }
}

