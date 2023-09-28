import * as S from './styles'
import { Item } from '../../types/Item'
import TableItem from '../TableItem'
import { useState } from 'react'
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md'

type Props = {
  itemList: Item[],
  handleRemoveBond: (id: string, item: Item) => void,
  setEditModal: (v: Boolean) => void,
  setItem: (item: Item) => void
}

export default function TableArea({ itemList, handleRemoveBond, setEditModal, setItem }: Props) {
  const itemsPerPage = 10; // Número de itens por página
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filtrar os itens com base na página atual
  const itemsToDisplay = itemList.slice(startIndex, endIndex);

  const totalPages = Math.ceil(itemList.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    if(currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if(currentPage !== totalPages){
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <S.TableContainer>
      <S.Table>
        <thead>
          <tr>
            <S.TableHeadColumn width={20}>Data</S.TableHeadColumn>
            <S.TableHeadColumn width={20}>Categoria</S.TableHeadColumn>
            <S.TableHeadColumn width={30}>Título</S.TableHeadColumn>
            <S.TableHeadColumn width={20}>Valor</S.TableHeadColumn>
            <S.TableHeadColumn width={10} />
          </tr>
        </thead>
        <tbody>
          {itemsToDisplay.map((item, index) => (
            <TableItem
              key={index}
              item={item}
              handleRemoveBond={handleRemoveBond}
              setEditModal={setEditModal} setItem={setItem} />
          ))}
        </tbody>
      </S.Table>

      <S.PageControlContainer>
        <S.PreviousPage onClick={handlePreviousPage}><MdArrowBackIos /></S.PreviousPage>
        <S.PageControl>{currentPage} de {totalPages}</S.PageControl>
        <S.NextPage onClick={handleNextPage}><MdArrowForwardIos /></S.NextPage>
      </S.PageControlContainer>
    </S.TableContainer>
  )
}
