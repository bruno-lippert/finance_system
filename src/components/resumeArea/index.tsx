import React from 'react'
import * as S from './styles'
import { formatedMonth } from '../../helpers/dateFilter'
import { addExpenses, addRevenue, balance } from '../../helpers/valueHelper'
import { AiOutlineArrowLeft, AiOutlineArrowRight  } from 'react-icons/ai';
import { Item } from '../../types/Item';

type Props = {
    currentDate: string,
    onCurrentMonth: (newMonth: string) => void,
    item: Item[]
}

export default function ResumeArea({ currentDate, onCurrentMonth, item }: Props) {

  const handleLastMonth = () => {
    const [year, month] = currentDate.split('-')
    const newDate = new Date(parseInt(year), parseInt(month) - 1, 1)
    newDate.setMonth(newDate.getMonth() - 1);
    onCurrentMonth(`${newDate.getFullYear()}-${newDate.getMonth() + 1}`)
  }
  
  const handleNextMonth = () => {
    const [year, month] = currentDate.split('-')
    const newDate = new Date(parseInt(year), parseInt(month) - 1, 1)
    newDate.setMonth(newDate.getMonth() + 1);
    onCurrentMonth(`${newDate.getFullYear()}-${newDate.getMonth() + 1}`)
  }

  return (
    <S.Container>
        <S.MonthArea>
            <S.MonthArrow onClick={handleLastMonth}><AiOutlineArrowLeft /></S.MonthArrow>
            <S.MonthString>{formatedMonth(currentDate)}</S.MonthString>
            <S.MonthArrow onClick={handleNextMonth}><AiOutlineArrowRight /></S.MonthArrow>
        </S.MonthArea>
        <S.ResumeArea>
          <S.Resume>Receita <S.Value>R$ {addRevenue(item)}</S.Value></S.Resume>
          <S.Resume>Despesas <S.Value>R$ {addExpenses(item)}</S.Value></S.Resume>
          <S.Resume>Balanço <S.Value>{balance(addRevenue(item), addExpenses(item))}</S.Value></S.Resume>
        </S.ResumeArea>
    </S.Container>
  )
}
