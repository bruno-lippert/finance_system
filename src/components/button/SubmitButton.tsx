import React from 'react';
import * as S from './styles'

interface Props {
    value: string,
    type: string
}

export default function Button({value, type}: Props) {
  return (
    <S.SubmitButton value={value} type={type}/>
  );
}
