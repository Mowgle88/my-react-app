import React, { useContext } from 'react'
import { AuthContext } from '../components/contaxt';
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'

export default function Login() {

  const {isAuth, setIsAuth} = useContext(AuthContext);

  const login = (event: any) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  }

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Login Page</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Enter login" />
        <MyInput type="password" placeholder="Enter password" />
        <MyButton>LogIn</MyButton>
      </form>
    </div>
  )
}
