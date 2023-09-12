import React from 'react';
import * as S from './styles'
import Button from '../button/SubmitButton';

export default function Login() {
  return (
    <S.Container>
      <S.Login>
        <h1>Login</h1>
        <div>
          <label htmlFor="email"><h3>Email:</h3></label>
        <S.Email />
        </div>
        <div>
          <label htmlFor="passwor"><h3>Senha:</h3></label>
          <S.Password />
        </div>

        <Button value='Entrar' type='submit'/>
      </S.Login>
    </S.Container>
  );
}