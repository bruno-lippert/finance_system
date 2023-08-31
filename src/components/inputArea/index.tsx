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
      description: title,
      value: value
    }
    
    if(category === '') {
      alert('Informe uma categoria!')
    } else if(title === ''){
      alert('Informe uma descrição!')
    } else if(value === 0 || null) {
      alert('Informe um valor!')
    } else {
      onBond()
      resetInputs();
      createBond(newItem)
    }

  }

  const resetInputs = () => {
    setDate(new Date())
    setTitle('')
    setValue(0)
  }

  return (
    <S.Container>
      <S.DataContainer>
        <div className='inputInfos inputDate'>
          Data:
          <S.InputDate type='date' onChange={handleDateChange} value={date.toISOString().split('T')[0]}/>
        </div>
        <div className='inputInfos inputCategory'>
          Categoria:
          <S.InputCategory onChange={handleCategoryChange}>
            <option>[Selecione]</option>
            <option>Necessidades</option>
            <option>Alimentação</option>
            <option>Entretenimento</option>
            <option>Salário</option>
          </S.InputCategory>
        </div>
        <div className='inputInfos inputTitle'>
          Descrição:
          <S.InputTitle onChange={handleTitleChange} value={title}/>
        </div>
        <div className='inputInfos inputValue'>
          Valor:
          <S.InputValue onChange={handleValueChange} value={value}/>
        </div>
      </S.DataContainer>
      <S.SendContainer>
        <button onClick={register}>Cadastrar</button>
      </S.SendContainer>

    </S.Container>
  )
}
