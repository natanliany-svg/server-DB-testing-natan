//בסיעתא דשמייא
import { MongoClient } from 'mongodb'


const MONGO_DB_URI = process.env(MONGO_DB_URI)
const client = new MongoClient(MONGO_DB_URI)


try {
    await client.connect()
    console.log('db test connected');
    
} catch (e) {
    console.error('filed connect to DB', e.message);
    process.exit()
}

const db = client.db('test_soldiers')
export const collection = db.collection('welfare_record')



