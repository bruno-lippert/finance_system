import React, { useState } from 'react';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import { userLogin, userSingUp } from '../../services/userManagement';
import { UserLogin } from '../../types/Login';
import { BsArrowLeftCircle } from 'react-icons/bs';

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
      const newUser = data.map(user => {
        return {
          ...user
        }
      })
      setUser(newUser)
    }

    user.map(user => {
      if (user.email === email && user.password === password) {
        navigate('/home')
      } else {
        setError("Usuário não encontrado!")
      }
    })

  }

  const handleUserLogin = async () => {
    fetchLogin()
  }

  const handleUserSingUp = async () => {
    const newUser: UserLogin = {
      name: userName,
      email: email,
      password: password
    }

    if (!newUser.email.includes('@')) {
      alert(`Senha deve conter no minimo 8 caracteres!`)
    } else if (newUser.email === `` && newUser.name === ``) {
      alert(`Dados inválidos!`)
    } else if (Number(newUser.password.length) < 8) {
      alert(`Email Inválido!`)
    } else {
      userSingUp(newUser)
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

  return (
    <S.Container>
      <S.Login>
        <S.BackButton>
          <BsArrowLeftCircle onClick={() => setUserHasLogin(true)}/>
        </S.BackButton>

        {userHasLogin ? <h1>Login</h1> : <h1>Cadastro</h1>}

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

  );
}