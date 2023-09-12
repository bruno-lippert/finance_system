import styled from 'styled-components';

interface ButtonProps {
    value: string,
    type: string
  }

export const SubmitButton = styled.input.attrs<ButtonProps>((props) => ({
    type: props.type,
    value: props.value
}))`
    border: none;
    border-radius: 2px;
    background-color: #fff;
`;