import { createWelfareRecord, getWelfareRecordBySoldierId } from "../DAL/dal.mongoDb.js";
import { error } from 'node:console'


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









// export async function createBenefitPeriod(req, res) {
//     try {
//         const BenefitPeriod = req.body
//         BenefitPeriod ['BenefitPeriod'] = []
//         console.log(BenefitPeriod);
//         const result = await insertUser(BenefitPeriod)
//         console.log(result);
//         return res.status(201).json({ id : result })
//     } catch (e) {
//         console.error(e.message);
//         return res.status(500).json({error:'server error'})
//     }
// }

