import styled, { css } from 'styled-components';

export const TableContainer = styled.main`
    width: 100%;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
`;

export const Table = styled.table`
    padding: 5px;
    text-align: left;
    width: 100%;

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

export const PageControlContainer = styled.section`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 5px;
    padding: 5px 10px 10px 5px;

    * {
        margin: 0;
        padding: 0;
    }
`;

const GlobalPageControlContainer = css`
    width: 45px;
    height: 25px;
    text-align: center;
`;

export const NextPage = styled.button`
    width: 35px;
    height: 25px;
`;

export const PreviousPage = styled.button`
    width: 35px;
    height: 25px;
`;

export const PageControl = styled.div`
    width: 45px;
    height: 25px;
    text-align: center;
`;