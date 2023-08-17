import styled from 'styled-components';

export const Table = styled.table`
    box-shadow: 0px 0px 5px #CCC;
    padding: 5px;
    border-radius: 10px;
    text-align: left;
    @media (max-width: 450px) {
        font-size: 0.8rem;
    }
    @media (max-width: 360px) {
        font-size: 0.5rem;
    }
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
    width: ${ props => props.width ? `${props.width}%` : `auto`} ;
    padding: 10px;
`;
