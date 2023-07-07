import React, { useEffect, useState } from 'react';
import * as S from './styles'
import './css.css'
import { Item } from '../../types/Item'
import { categorys } from '../../data/category';

type Props = {
  onBond: (newBond: Item) => void
}

export default function InputArea({ onBond }: Props) {
  const [date, setDate] = useState<Date>(new Date(2000, 1, 1));
  const [category, setCategory] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [value, setValue] = useState<number>(0);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = event.target.value;
    const formattedDate = new Date(selectedDate);
    setDate(formattedDate);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    
    switch(event.target.value) {
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

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };
  
  const register = () => {
    const newItem: Item = {
      date: date,
      category: category,
      title: title,
      value: value
    }
    onBond(newItem)
  }

  return (
    <S.Container>
      <S.DataContainer>
        <div className='inputInfos'>
          Data:
          <S.InputDate type='date' onChange={handleDateChange}/>
        </div>
        <div className='inputInfos'>
          Categoria:
          <S.InputCategory onChange={handleCategoryChange}>
            <option>[Selecione]</option>
            <option>Necessidades</option>
            <option>Alimentação</option>
            <option>Entretenimento</option>
            <option>Salário</option>
          </S.InputCategory>
        </div>
        <div className='inputInfos'>
          Descrição:
          <S.InputTitle onChange={handleTitleChange}/>
        </div>
        <div className='inputInfos'>
          Valor:
          <S.InputValue onChange={handleValueChange}/>
        </div>
      </S.DataContainer>
      <S.SendContainer>
        <button onClick={register}>Cadastrar</button>
      </S.SendContainer>

    </S.Container>
  )
}