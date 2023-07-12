import React from 'react'
import * as S from './styles'
import { Item } from '../../types/Item'
import { formatedDate } from '../../helpers/dateFilter'
import { formatedValue } from '../../helpers/valueHelper'
import { categorys } from '../../data/category'
import { BsTrash3 } from 'react-icons/bs';

type Props = {
  item: Item,
  position: number,
  handleRemoveTitle: (key: number) => void
}

export default function TableItem({ item, position, handleRemoveTitle } : Props) {
  return (
    <S.TableLine>
        <S.TableColumn>{formatedDate(item.date)}</S.TableColumn>
        <S.TableColumn>
          <S.Category color={categorys[item.category].color}>{categorys[item.category].title}</S.Category>
        </S.TableColumn>
        <S.TableColumn>{item.title}</S.TableColumn>
        <S.TableColumn>R$ {formatedValue(item.value)}</S.TableColumn>
        <S.TableColumn>
          <S.RemoveIcon>
            <BsTrash3 onClick={()=>handleRemoveTitle(position)}/>
          </S.RemoveIcon>
        </S.TableColumn>
    </S.TableLine>
  )
}
