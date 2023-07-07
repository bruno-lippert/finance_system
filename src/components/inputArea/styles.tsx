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
    justify-content: space-between;
    width: 100%;
`;

const globalInputStyles
 = css`
    background-color: transparent;
    border: 1px solid black;
    border-radius: 3px;
`;

export const InputDate = styled.input`
    ${globalInputStyles
    }
`;

export const InputCategory = styled.select`
    ${globalInputStyles
    }
`;

export const InputTitle = styled.input`
    ${globalInputStyles
    }
    
`;

export const InputValue = styled.input`
    ${globalInputStyles
    }
`;

export const SendContainer = styled.div`
    display: flex;
    justify-content: center;
`;