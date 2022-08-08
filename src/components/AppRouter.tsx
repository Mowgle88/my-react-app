import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Main from '../pages/Main'
import Posts from '../pages/Posts'
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage'
import Login from '../pages/Login'
import { AuthContext } from '../context'
import Loader from './UI/Loader/Loader'
import EndlessPosts from '../pages/EndlessPost'

export default function AppRouter() {

  const {isAuth, isLoading} = useContext(AuthContext);

  if(isLoading) {
    return <Loader />
  }

  return (
    <>
      <Routes>
        {isAuth
          ?
          <>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostIdPage />} />
            <Route path="/endless-posts" element={<EndlessPosts />} />
            <Route path="/*" element={<Error />} />
            <Route path="/login" element={<Navigate  to="/" replace />} />
          </>
          :
          <Route path="/login" element={<Login />} />}
          <Route path="/*" element={<Navigate  to="/login" replace />} />
        </Routes>
    </>
  )
}
