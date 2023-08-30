import { categories } from "../data/category"
import { Item } from "../types/Item"


export const formattedValue = (value: number): string => {
    return `${value.toFixed(2)}`.replace('.', ',')
}

export const addRevenue  = (item: Item[]): string => {
    let revenue: number = 0

    item.forEach((item) => {
        if(!categories[item.category].expanse) {
            revenue += item.value
        }
        
    })

    return formattedValue(revenue)
}

export const addExpenses = (item: Item[]): string => {
    let expanse: number = 0

    item.forEach((item) => {
        if(categories[item.category].expanse) {
            expanse += item.value
        }
        
    })

    return formattedValue(expanse)
}

export const balance = (addRevenue: string, addExpenses: string): string => {
    const revenue = addRevenue.replace(',', '.')
    const expenses = addExpenses.replace(',', '.')
    return `R$ ${formattedValue(Number(revenue) - Number(expenses))}`
}