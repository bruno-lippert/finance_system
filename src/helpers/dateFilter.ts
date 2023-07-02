import { Item } from "../types/Item";

export const getCurrentMonth = () => {
    let now = new Date;
    return `${now.getFullYear()}-${now.getMonth() + 1}`;
}

export const getFilteredListByMonth = (listItem: Item[], date: string): Item[] => {
    let newList: Item[] = []
    let [year, month] = date.split('-')

    for (let i in listItem) {
        if(listItem[i].date.getFullYear() == parseInt(year) && listItem[i].date.getMonth() + 1 == parseInt(month)) {
            newList.push(listItem[i])
        }
    }

    return newList

}

export const formatedDate = (date: Date): string => {
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()

    return `${addZeroToDate(day)}/${addZeroToDate(month + 1)}/${year}`
}

const addZeroToDate = ((n: number) => n < 10 ? `0${n}` : `${n}`);

export const formatedMonth = (date: string): string => {
    const [year, month]  = date.split('-')

    const months: string[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    return `${months[Number(month) - 1]} de ${year}`
}