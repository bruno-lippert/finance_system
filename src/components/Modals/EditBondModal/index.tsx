import React, { useState } from 'react'
import * as S from './styles'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Item } from '../../../types/Item'
import { updateBond } from '../../../services/financeService'

type Props = {
  item: Item,
  setEditModal: (v: boolean) => void,
  onBond: () => void
}

export default function EditBondModal({ item, setEditModal, onBond }: Props) {
  const [id, setId] = useState(item.id ?? ``)
  const [date, setDate] = useState<Date>(new Date(item.date));
  const [category, setCategory] = useState<string>('');
  const [description, setDescription] = useState<string>(item.description);
  const [value, setValue] = useState<number>(item.value);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = event.target.value;
    const formattedDate = new Date(selectedDate);
    setDate(formattedDate);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {

    switch (event.target.value) {
      case 'Necessidades':
        setCategory('needs')
        break;
      case 'Alimentação':
        setCategory('food')
        break;
      case 'Entretenimento':
        setCategory('entertainment')
        break;
      case 'Salário':
        setCategory('salary')
        break;
      default:
        setCategory('');
        alert('Informe uma categoria!')
        break;
    }
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  const update = () => {
    const newItem: Item = {
      date: date,
      category: category,
      description: description,
      value: value
    }

    if (category === '') {
      alert('Informe uma categoria!')
    } else if (description === '') {
      alert('Informe uma descrição!')
    } else if (value === 0 || null) {
      alert('Informe um valor!')
    } else {
      updateBond(id, newItem)
      onBond()
    }
    
    setEditModal(false)
  }

  return (
    <S.ModalContainer>
      <S.ContentContainer>
         <AiOutlineCloseCircle className='closeModal' onClick={() => setEditModal(false)}/>
        <S.DataContainer>
          <div className='inputInfos inputDate'>
            Data:
            <S.InputDate type='date' onChange={handleDateChange} value={date.toISOString().split('T')[0]} />
          </div>
          <div className='inputInfos inputCategory'>
            Categoria:
            <S.InputCategory onChange={handleCategoryChange}>
              <option>[Selecione]</option>
              <option value='Necessidades'>Necessidades</option>
              <option value='Alimentação'>Alimentação</option>
              <option value='Entretenimento'>Entretenimento</option>
              <option value='Salário'>Salário</option>
            </S.InputCategory>
          </div>
          <div className='inputInfos inputdescription'>
            Descrição:
            <S.InputDescription onChange={handleDescriptionChange} value={description} />
          </div>
          <div className='inputInfos inputValue'>
            Valor:
            <S.InputValue onChange={handleValueChange} value={value} />
          </div>
        </S.DataContainer>
        <S.EditContainer>
          <button onClick={update}>Editar</button>
        </S.EditContainer>
      </S.ContentContainer>
    </S.ModalContainer>
  )
}
