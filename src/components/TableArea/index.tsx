import * as S from './styles'
import { Item } from '../../types/Item'
import TableItem from '../TableItem'

type Props = {
  itemList: Item[],
  handleRemoveBond: (id: string, item: Item) => void,
  setEditModal: (v: Boolean) => void,
  setItem: (item: Item) => void
}

export default function TableArea({ itemList, handleRemoveBond, setEditModal, setItem }: Props) {
  
  return (
    <S.Table>
        <thead>
            <tr>
                <S.TableHeadColumn width={20}>Data</S.TableHeadColumn>
                <S.TableHeadColumn width={20}>Categoria</S.TableHeadColumn>
                <S.TableHeadColumn width={30}>Título</S.TableHeadColumn>
                <S.TableHeadColumn width={20}>Valor</S.TableHeadColumn>
                <S.TableHeadColumn width={10}/>
            </tr>
        </thead>
        <tbody>
          {itemList.map((item, index) => (
              <TableItem
              key={index}
              position={index}
              item={item}
              handleRemoveBond={handleRemoveBond}
              setEditModal={setEditModal} setItem={setItem}/>
          ))}
        </tbody>
    </S.Table>
  )
}
