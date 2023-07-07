import React from 'react'
import * as S from './styles'
import { Item } from '../../types/Item'
import { formatedDate } from '../../helpers/dateFilter'
import { formatedValue } from '../../helpers/valueHelper'
import { categorys } from '../../data/category'

type Props = {
  item: Item
}

export default function TableItem({ item } : Props) {
  return (
    <S.TableLine>
        <S.TableColumn>{formatedDate(item.date)}</S.TableColumn>
        <S.TableColumn>
          <S.Category color={categorys[item.category].color}>{categorys[item.category].title}</S.Category>
        </S.TableColumn>
        <S.TableColumn>{item.title}</S.TableColumn>
        <S.TableColumn>R$ {formatedValue(item.value)}</S.TableColumn>
    </S.TableLine>
  )
}
