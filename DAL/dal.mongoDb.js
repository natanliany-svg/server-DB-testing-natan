import { collection } from "../Db/mongoDb.js";

export async function getWelfareRecordBySoldierId(soldierId) {

    console.log('cheking if soldr exist', soldierId)
    try {
        const res = await collection.findOne({ soldierId: Number(soldierId) })
    return res
    } catch (e) {
        console.error(e.message);
    }
}


// export async function createSoldiares(data) {
//     try {
//         const res = await collection.insertOne(data)
//         console.log(res);
        
//         const _id = await res.insertedId
//     } catch (e) {
//         console.error('create is faild');
        
//     }
// }

export async function createWelfareRecord(record) {
    try {
    const res = await collection.insertOne(record)
    console.log('insert succes - ', record.soldierId)
    return res.insertedId
    } catch (e) {
    console.error(e.message)
    }
}




export async function updateWelfareRecord(soldiers, updateDoc) {
    try {
        await collection.updateOne({soldierId: Number(soldierId)}, {$set:updateDoc})
    } catch (e) {
        console.error(e.message);
        
    }
}























