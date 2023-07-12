import React, { useEffect, useState } from 'react';
import * as S from './App.styles'
import TableArea from './components/TableArea';
import {items} from './data/items'
import { getCurrentMonth, getFilteredListByMonth } from './helpers/dateFilter';
import { Item } from './types/Item';
import ResumeArea from './components/resumeArea';
import InputArea from './components/inputArea/indesx';

function App() {
const [list, setList] = useState(items)
const [flilteredList, setFilteredList] = useState<Item[]>([])
const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

useEffect(() => {
  setFilteredList(getFilteredListByMonth(list, currentMonth))
}, [list, currentMonth])

const handleCurrentMonth = (newMonth: string) => {
  setCurrentMonth(newMonth)
}

const handleList = (newTitle: Item) => {
  const newList = [...list]

  newList.push(newTitle)
  newList.sort((a, b) => b.date.getTime() - a.date.getTime()) //ordena ostitulosem ordem decresente
  setList(newList)
}

const handleRemoveTitle = (position: number) => {
  const newList = [...list]

  newList.splice(position, 1)

  setList(newList)
}

  return (
    <S.Container >
      <S.Header>
        <S.Title>
          Sistema de Finanças
        </S.Title>
      </S.Header>

      <S.Body>
        <ResumeArea currentDate={currentMonth}
        onCurrentMonth={handleCurrentMonth}
        item={flilteredList}
        />

        <InputArea onTitle={handleList}/>

        <TableArea itemList={flilteredList} handleRemoveTitle={handleRemoveTitle}/>
      </S.Body>

    </S.Container>
  );
}

export default App;
