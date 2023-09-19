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
  input {
    font-size: 1em;
  }
`;

export const Email = styled.input.attrs((props) => ({
  type: 'email',
  id: 'email'
}))`
  border: none;
  border-radius: 5px;

  width: 200px;
  height: 25px;
`;

export const Password = styled.input.attrs((props) => ({
  type: 'password',
  id: 'password'
}))`
  border: none;
  border-radius: 5px;

  width: 200px;
  height: 25px;
`;

export const Name = styled.input.attrs((props) => ({
  type: 'text',
  id: 'name'
}))`
  border: none;
  border-radius: 5px;

  width: 200px;
  height: 25px;
`;

export const LoginButton = styled.input`
  border: none;
  border-radius: 2px;
  background-color: #fff;

  margin-top: 10px;

  width: 70px;
  height: 25px;

  &:hover {
      cursor: pointer;
  }
  &:active {
      background-color: #DCDCDC
  }
`;

export const RegisterButton = styled(LoginButton)`
  width: 100px;
`;

export const NoRecord = styled.div`
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    color: #fff;
  }
`;