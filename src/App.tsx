import { useEffect, useState } from 'react';
import * as S from './App.styles'
import TableArea from './components/TableArea';
import { getCurrentMonth, getFilteredListByMonth } from './helpers/dateFilter';
import { Item } from './types/Item';
import ResumeArea from './components/resumeArea';
import InputArea from './components/inputArea';
import { deleteBonds, getBonds } from './services/financeService';
import EditBondModal from './components/Modals/EditBondModal';
import Login from './components/Login';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

function App() {
  return <RouterProvider router={router} />
//   const [list, setList] = useState<Item[]>([])
//   const [flilteredList, setFilteredList] = useState<Item[]>([])
//   const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

//   const [editModal, setEditModal] = useState<Boolean>(false)
//   const [item, setItem] = useState<Item>({date: new Date(), category: '', description: '', value: 0})

//   useEffect(() => {
//     setFilteredList(getFilteredListByMonth(list, currentMonth))
//   }, [list, currentMonth])

//   useEffect(() => {
//     fetchBonds()
//   }, [])

//   async function fetchBonds() {
//     const data = await getBonds()

//     if (data) {
//         const newDataWithDateObjects = data.map(item => {
//             // Converte a data para um objeto Date no fuso horário local
//             const localDate = new Date(item.date + 'T00:00:00');
//             return {
//                 ...item,
//                 date: localDate,
//             };
//         });

//         setList(newDataWithDateObjects);
//     }
// }


//   const handleCurrentMonth = (newMonth: string) => {
//     setCurrentMonth(newMonth)
//   }

//   const handleList = () => {
//     fetchBonds()
//   }

//   const handleRemoveBond = async (id: string, item: Item) => {
//     await deleteBonds(id)
//     fetchBonds()
//   }

//   return (
//     <S.Container >
//       <S.Header>
//         <S.Title>
//           Sistema de Finanças
//         </S.Title>
//       </S.Header>

//       <S.Body>
//         <ResumeArea currentDate={currentMonth}
//           onCurrentMonth={handleCurrentMonth}
//           item={flilteredList}
//         />

//         <InputArea onBond={handleList} />

//         <TableArea itemList={flilteredList} handleRemoveBond={handleRemoveBond} setEditModal={setEditModal} setItem={setItem}/>
//       </S.Body>

//       {editModal && <EditBondModal setEditModal={setEditModal} item={item}/>}
//     </S.Container>
//  );
}

export default App;