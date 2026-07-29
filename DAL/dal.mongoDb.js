import { collection } from "../Db/mongoDb";

export async function getWelfareRecordBySoldierId(soldierId) {

    console.log('cheking if soldr exist', soldierId)
    try {
        const res = await collection.findOne({ soldierId: Number(soldierId) })
    return res
    } catch (e) {
        console.error(e.message);
    }
}


// export async function get_all(params) {
    
// }




























