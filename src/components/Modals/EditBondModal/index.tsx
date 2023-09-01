import React, { useState } from 'react'
import * as S from './styles'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Item } from '../../../types/Item'

type Props = {
  item: Item,
  setEditModal: (v: boolean) => void
}

export default function EditBondModal({ item, setEditModal }: Props) {
  const [date, setDate] = useState<Date>(new Date(item.date));
  const [category, setCategory] = useState<string>('');
  const [description, setDescription] = useState<string>(item.description);
  const [value, setValue] = useState<number>(item.value);

  return (

    <S.ModalContainer>
      <S.ContentContainer>
         <AiOutlineCloseCircle className='closeModal' onClick={() => setEditModal(false)}/>
        <S.DataContainer>
          <div className='inputInfos inputDate'>
            Data:
            <S.InputDate type='date' value={date.toISOString().split('T')[0]} />
          </div>
          <div className='inputInfos inputCategory'>
            Categoria:
            <S.InputCategory>
              <option>[Selecione]</option>
              <option>Necessidades</option>
              <option>Alimentação</option>
              <option>Entretenimento</option>
              <option>Salário</option>
            </S.InputCategory>
          </div>
          <div className='inputInfos inputdescription'>
            Descrição:
            <S.InputDescription value={description} />
          </div>
          <div className='inputInfos inputValue'>
            Valor:
            <S.InputValue value={value} />
          </div>
        </S.DataContainer>
        <S.EditContainer>
          <button>Editar</button>
        </S.EditContainer>
      </S.ContentContainer>
    </S.ModalContainer>
  )
}
