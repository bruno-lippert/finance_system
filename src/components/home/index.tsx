import { useEffect, useState } from 'react';
import * as S from './styles'
import TableArea from '../TableArea';
import { getCurrentMonth, getFilteredListByMonth } from '../../helpers/dateFilter';
import { Item } from '../../types/Item';
import ResumeArea from '../resumeArea';
import InputArea from '../inputArea';
import EditBondModal from '../Modals/EditBondModal';
import { deleteBonds, getBonds } from '../../services/financeService';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Navbar from './navbar';
import { loginUser } from '../../redux/user/actions';

function App() {
  const [list, setList] = useState<Item[]>([])
  const [flilteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  const [editModal, setEditModal] = useState<Boolean>(false)
  const [item, setItem] = useState<Item>({date: new Date(), category: '', description: '', value: 0})

  const dispatch = useDispatch()
  const { currentUser } = useSelector((state: any) => state.userReducer)
  
  if (currentUser !== null) {
    console.log(`teste `+currentUser)
    localStorage.setItem('currentUser', currentUser);
  }
  const currentUserInLocalStorage = localStorage.getItem('currentUser')
  

  const navigate = useNavigate();

  if(currentUserInLocalStorage === 'null' || currentUserInLocalStorage === null) {
    console.log('1° if : '+currentUserInLocalStorage)
    navigate('/')
  }else {
    console.log('else : '+currentUserInLocalStorage)
  }

  useEffect(() => {
    setFilteredList(getFilteredListByMonth(list, currentMonth))
  }, [list, currentMonth])

  useEffect(() => {
    fetchBonds()
  }, [])

  async function fetchBonds() {
    const data = await getBonds()

    if (data) {
        const newDataWithDateObjects = data.map(item => {
            // Converte a data para um objeto Date no fuso horário local
            const localDate = new Date(item.date + 'T00:00:00');
            return {
                ...item,
                date: localDate,
            };
            
        });

        setList(newDataWithDateObjects);
    }
}


  const handleCurrentMonth = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  const handleList = () => {
    fetchBonds()
  }

  const handleRemoveBond = async (id: string, item: Item) => {
    await deleteBonds(id)
    fetchBonds()
  }

  return (
    <S.Container >
      <Navbar />
      <Header />

      <S.Body>
        <ResumeArea currentDate={currentMonth}
          onCurrentMonth={handleCurrentMonth}
          item={flilteredList}
        />

        <InputArea onBond={handleList} />

        <TableArea itemList={flilteredList} handleRemoveBond={handleRemoveBond} setEditModal={setEditModal} setItem={setItem}/>
      </S.Body>

      {editModal && <EditBondModal setEditModal={setEditModal} item={item} onBond={handleList} />}
    </S.Container>
  );
}

export default App;