import * as S from './styles'
import { Item } from '../../types/Item'
import TableItem from '../TableItem'

type Props = {
  itemList: Item[],
  handleRemoveTitle: (key: number) => void
}

export default function TableArea({ itemList, handleRemoveTitle }: Props) {
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
              <TableItem key={index} position={index} item={item} handleRemoveTitle={handleRemoveTitle}/>
          ))}
        </tbody>
    </S.Table>
  )
}
