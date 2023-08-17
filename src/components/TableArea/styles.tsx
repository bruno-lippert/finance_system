import styled from 'styled-components';

export const Table = styled.table`
    box-shadow: 0px 0px 5px #CCC;
    padding: 5px;
    border-radius: 10px;
    text-align: left;
    overflow-x: auto;
    @media (max-width: 450px) {
        
    }
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
    width: ${ props => props.width ? `${props.width}px` : `auto`} ;
    padding: 10px;
`;
