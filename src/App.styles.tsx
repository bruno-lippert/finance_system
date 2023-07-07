import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.header`
    text-align: center;
    height: 180px;
    background-color: #3e838c;
    width: 100%;
`;

export const Title = styled.h1`
    padding-top: 30px;
`;

export const Body = styled.body`
    display: flex;
    flex-direction: column;
    max-width: 980px;
    width: 100%;
    margin: -40px 20px 0 20px;
    background-color: #fff;
    border-radius: 10px;
    gap: 25px;
`