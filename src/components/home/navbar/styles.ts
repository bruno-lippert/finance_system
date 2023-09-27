import styled from 'styled-components';

export const NavContainer = styled.main`
    display: flex;
    justify-content: flex-end;
    align-items: center; 
    gap: 20px;

    width: 100%;

    background-color: #3e838c;

    * {
        margin: 0;
        padding: 0;
    }
`;

export const LogoutUser = styled.button`
    height: 30px;
    width: 40px;

    border: none;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;    
    }
    
`;

export const CurrentUser = styled.span`
    padding-right: 20px;
`;