//בסיעתא דשמייא 
import { SBClient } from "../Db/supabase.js"



export async function createBudget(budgetData) {
    console.log('creat budgt in supabase', budgetData)
    try {
    const { data, error } = await SBClient
        .from('budgets')
        .insert([budgetData])
        .select()
        .single()

    if (error) {
        console.error(error.message)
        return null
    }
    return data
    } catch (e) {
    console.error(e.message)
    }
}

export async function getBudgetsByUnit(unit) {
    console.log('geting budgts for unit -', unit)
    try {
    const { data, error } = await SBClient
        .from('budgets')
        .select('*')
        .eq('unit', unit)

    if (error) {
        console.error(error.message)
        return null
    }
    return data
    } catch (e) {
    console.error(e.message)
    }
}

export async function getTransactionsByBudgetId(budgetId) {
    try {
    const { data, error } = await SBClient
        .from('transactions')
        .select('*')
        .eq('budgetId', budgetId)

    if (error) {
        console.error(error.message)
        return null
    }
    return data
    } catch (e) {
    console.error(e.message)
    }
}

export async function createTransaction(transactionData) {
    console.log('dooing transection now..')
    try {
    const { data, error } = await SBClient
        .from('transactions')
        .insert([transactionData])
        .select()
        .single()

    if (error) {
        console.error(error.message)
        return null
    }
    return data
    } catch (e) {
    console.error(e.message)
    }
}

export async function getBudgetById(budgetId) {
    try {
    const { data, error } = await SBClient
        .from('budgets')
        .select('*')
        .eq('id', budgetId)
        .single()

    if (error) {
        return null
    }
    return data
    } catch (e) {
    console.error(e.message)
    }
}

export async function getAllBudgets() {
    try {
        const {data, error} = await SBClient.from('budgets').select('*')
        if (error) return null
        return data
    } catch (e) {
        console.error(e.message);
        
    }
}