import styled, { css } from 'styled-components';

export const Container = styled.div`
    box-shadow: 0px 0px 5px #CCC;
    padding: 5px;
    border-radius: 10px;
    display: flex;
    gap: 20px;
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
`;

export const DataContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    flex-wrap: wrap;

    @media (max-width: 550px) {
        display: grid;
        grid-template-areas: 
            'date'
            'category'
            'title'
            'value';
        gap: 10px;

        .inputDate {
            grid-area: date;
        }
        .inputCategory {
            grid-area: category;
        }
        .inputTitle {
            grid-area: title;
        }
        .inputValue {
            grid-area: value;
        }
    }
`;

const globalInputStyles
 = css`
    background-color: transparent;
    border: 1px solid black;
    border-radius: 3px;
`;

export const InputDate = styled.input`
    ${globalInputStyles}
`;

export const InputCategory = styled.select`
    ${globalInputStyles}
`;

export const InputDescription = styled.input`
    ${globalInputStyles}
`;

export const InputValue = styled.input`
    ${globalInputStyles}
`;

export const SendContainer = styled.div`
    display: flex;
    justify-content: center;
`;