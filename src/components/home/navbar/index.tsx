import React from 'react';
import * as S from './styles';
import { useSelector } from 'react-redux'

import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../redux/user/actions';

export default function Navbar() {
    const { currentUser } = useSelector((state: any) => state.userReducer)
    const dispatch = useDispatch();

    const currentUserInLocalStorage = localStorage.getItem('currentUser')

    const handleLogoutUser = () => {
        dispatch(logoutUser())
    }

  return (
    <S.NavContainer>
        <S.LogoutUser onClick={handleLogoutUser}>
            Sair
        </S.LogoutUser>
        <S.CurrentUser>
            <h5>{currentUserInLocalStorage}</h5>
        </S.CurrentUser>
    </S.NavContainer>
  );
}
