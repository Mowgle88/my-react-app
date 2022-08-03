import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navigation from './components/Navigation';
import About from './pages/About';
import Main from './pages/Main';
import Posts from './pages/Posts';

function App() {
    return (
      <>
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </>
  )
}

export default App;
