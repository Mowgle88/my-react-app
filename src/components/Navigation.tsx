import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './contaxt';
import MyButton from './UI/button/MyButton'

export default function Navigation() {

  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }
  
  return (
    <nav className="navbar">
      <span>My-React-App</span>

      <span className="navbar__links">
        <Link className="navbar__link" to="/">Main</Link>
        <Link className="navbar__link" to="/about">About</Link>
        <Link className="navbar__link" to="/posts">Posts</Link>
        <Link className="navbar__link" to="/endless-posts">EndlessPosts</Link>
      </span>

      {isAuth && 
      <MyButton
        style={{marginLeft:"10px", color:"white", border:"2px solid white"}}
        onClick={logout}
      >
        LogOut
      </MyButton>}
    </nav>
  )
}
