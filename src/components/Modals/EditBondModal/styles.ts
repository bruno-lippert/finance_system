import styled, { css } from 'styled-components';

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Fundo semitransparente */
    backdrop-filter: blur(5px); /* Aplica o efeito de desfoque */
    display: flex; 
    justify-content:center;
    align-items:center;
`;

export const ContentContainer = styled.div`
    box-shadow: 0px 0px 5px #CCC;
    padding: 5px;
    border-radius: 10px;
    display: flex;
    gap: 20px;
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    width: 80%;

    background-color: #fff;
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

export const EditContainer = styled.div`
    display: flex;
    justify-content: center;
`;