import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Login = styled.main`
  height: 600px;
  width: 450px;

  background-color: #3e838c;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;

   h3 {
    margin: 0;
    display: inline-block;
  }
`;

export const Email = styled.input.attrs((props) => ({
  type: 'email',
  id: 'email'
}))`
  border: none;
  border-radius: 5px;
`;

export const Password = styled.input.attrs((props) => ({
  type: 'password',
  id: 'password'
}))`
  border: none;
  border-radius: 5px;
`;
