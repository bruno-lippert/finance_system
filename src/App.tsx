import { useEffect, useState } from 'react';
import * as S from './App.styles'
import TableArea from './components/TableArea';
import { getCurrentMonth, getFilteredListByMonth } from './helpers/dateFilter';
import { Item } from './types/Item';
import ResumeArea from './components/resumeArea';
import InputArea from './components/inputArea';
import { deleteBonds, getBonds } from './services/financeService';

function App() {
  const [list, setList] = useState<Item[]>([])
  const [flilteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  useEffect(() => {
    setFilteredList(getFilteredListByMonth(list, currentMonth))
  }, [list, currentMonth])


  async function fetchBonds() {
    const data = await getBonds()

    if (data) {
      const newDataWithDateObjects = data.map(item => ({
        ...item,
        date: new Date(item.date), // Convert date to Date object
      }));

      setList(newDataWithDateObjects);
    }
  }

  useEffect(() => {
    fetchBonds()
  }, [])


  const handleCurrentMonth = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  const handleList = (newTitle: Item) => {
    const newList = [...list]

    newList.push(newTitle)
    newList.sort((a, b) => b.date.getTime() - a.date.getTime()) //ordena ostitulosem ordem decresente
    setList(newList)
  }

  const handleRemoveBond = async (id: string, item: Item) => {
    await deleteBonds(id)
    fetchBonds()
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

        <InputArea onTitle={handleList} />

        <TableArea itemList={flilteredList} handleRemoveBond={handleRemoveBond} />
      </S.Body>

    </S.Container>
  );
}

export default App;