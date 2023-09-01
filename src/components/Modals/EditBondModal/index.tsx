import React, { useState } from 'react'
import * as S from './styles'
import { AiOutlineCloseCircle } from 'react-icons/ai'

export default function EditBondModal() {
  const [date, setDate] = useState<Date>(new Date());
  const [category, setCategory] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [value, setValue] = useState<number>(0);

  return (

    <S.ModalContainer>
      <S.ContentContainer>
        <AiOutlineCloseCircle/>
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
