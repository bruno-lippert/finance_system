import { categorys } from "../data/category"
import { Item } from "../types/Item"


export const formatedValue = (value: number): string => {
    return `${value.toFixed(2)}`.replace('.', ',')
}

export const addRevenue  = (item: Item[]): string => {
    let revenue: number = 0

    item.forEach((item) => {
        if(!categorys[item.category].expanse) {
            revenue += item.value
        }
        
    })

    return formatedValue(revenue)
}

export const addExpenses = (item: Item[]): string => {
    let expanse: number = 0

    item.forEach((item) => {
        if(categorys[item.category].expanse) {
            expanse += item.value
        }
        
    })

    return formatedValue(expanse)
}

export const balance = (addRevenue: string, addExpenses: string): string => {
    const revenue = addRevenue.replace(',', '.')
    const expenses = addExpenses.replace(',', '.')
    console.log(revenue, expenses)
    return `R$ ${formatedValue(Number(revenue) - Number(expenses))}`
}