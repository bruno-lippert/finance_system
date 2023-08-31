import React from 'react'
import * as S from './styles'
import { Item } from '../../types/Item'
import { formattedDate } from '../../helpers/dateFilter'
import { formattedValue } from '../../helpers/valueHelper'
import { categories } from '../../data/category'
import { BsTrash3 } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi'

type Props = {
  item: Item,
  position: number,
  handleRemoveBond: (id: string, item: Item) => void
}

export default function TableItem({ item, position, handleRemoveBond }: Props) {

  return (
    <S.TableLine>
      <S.TableColumn>{formattedDate(item.date)}</S.TableColumn>
      <S.TableColumn>
        <S.Category color={categories[item.category].color}>{categories[item.category].title}</S.Category>
      </S.TableColumn>
      <S.TableColumn>{item.description}</S.TableColumn>
      <S.TableColumn>R$ {formattedValue(item.value)}</S.TableColumn>
      <S.TableColumn>
        <S.IconsContainer>
          <S.ModifyIcons>
            <BiEdit />
          </S.ModifyIcons>
          <S.ModifyIcons>
            <BsTrash3 onClick={() => item.id && handleRemoveBond(item.id, item)} />
          </S.ModifyIcons>
        </S.IconsContainer>
      </S.TableColumn>

    </S.TableLine>
  )
}
