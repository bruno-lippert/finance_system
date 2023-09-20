import React, { useState } from 'react';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import { userLogin, userSingUp } from '../../services/userManagement';
import { UserLogin } from '../../types/Login';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [error, setError] = useState('');
  const [user, setUser] = useState<UserLogin[]>([]);
  const [userHasLogin, setUserHasLogin] = useState<boolean>(true)

  const fetchLogin = async () => {
    const data = await userLogin()

    if (data) {
      data.map(user => {
        if (user.email === email && user.password === password) {
          navigate('/home')
          setUser(user)
        } else {

        }
      })
      // setUser(user)
    }

    if (user.length === 0) {
      setError(`Usuário não encontrado!`)
      toastError(`Usuário não encontrado!`)
      console.log('Erro')
    }
  }

  const handleUserLogin = async () => {
    try {
      fetchLogin()
    } catch {
      toastError(`Erro ao logar!`)
    }

  }

  const handleUserSingUp = async () => {
    const newUser: UserLogin = {
      name: userName,
      email: email,
      password: password
    }

    if (!newUser.email.includes('@')) {
      toastError(`Email inválido!`)
    } else if (newUser.email === `` && newUser.name === ``) {
      toastError(`Dados inválido!`)
    } else if (Number(newUser.password.length) < 8) {
      toastError(`A senha deve conter no mínimo 8 caracteres!`)
    } else {
      userSingUp(newUser)
      toast.success(`Usuário cadastrado com sucesso!`, {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'colored'
      })
      setUserHasLogin(true)
    }
  }

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value)
  }

  const toastError = (message: string) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
      theme: 'colored'
    })
  }

  return (
    <>
      <S.Container>
        <S.Login>

          {userHasLogin ?
            <h1>Login</h1> :
            <>
              <S.BackButton>
                <BsArrowLeftCircle onClick={() => setUserHasLogin(true)} />
              </S.BackButton>
              <h1>Cadastro</h1>
            </>}

          <div>
            <label htmlFor="email"><h3>Email:</h3></label>
            <S.Email onChange={handleEmail} />
          </div>

          <div>
            <label htmlFor="passwor"><h3>Senha:</h3></label>
            <S.Password onChange={handlePassword} />
          </div>

          {userHasLogin ?
            <>
              <S.LoginButton value='Entrar' type='submit' onClick={() => handleUserLogin()} />
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </> :
            <>
              <div>
                <label htmlFor="name"><h3>Nome:</h3></label>
                <S.Name onChange={handleName} />
              </div>
              <S.RegisterButton value='Cadastrar' type='submit' onClick={() => handleUserSingUp()} />
            </>
          }


          {userHasLogin && <S.NoRecord onClick={() => setUserHasLogin(false)}>Não tenho cadastro</S.NoRecord>}

        </S.Login>
      </S.Container>
      <ToastContainer />
    </>

  );
}