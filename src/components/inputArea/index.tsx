import React, { useEffect, useState } from 'react';
import * as S from './styles'
import './css.css'
import { Item } from '../../types/Item'
import { createBond } from '../../services/financeService';

type Props = {
  onBond: () => void
}

export default function InputArea({ onBond }: Props) {
  const [date, setDate] = useState<Date>(new Date());
  const [category, setCategory] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [value, setValue] = useState<number>(0.0);

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

  const register = async () => {
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
      await createBond(newItem)
      onBond()
      resetInputs();
    }

  }

  const resetInputs = () => {
    setDate(new Date())
    setDescription('')
    setValue(0)
  }

  return (
    <S.Container>
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
          <S.InputDescription type='text' onChange={handleDescriptionChange} value={description} />
        </div>
        <div className='inputInfos inputValue'>
          Valor:
          <S.InputValue type='number' onChange={handleValueChange} value={value} />
        </div>
      </S.DataContainer>
      <S.SendContainer>
        <button onClick={register}>Cadastrar</button>
      </S.SendContainer>

    </S.Container>
  )
}
