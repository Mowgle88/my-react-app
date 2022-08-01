import React, { useState } from 'react';
import PostList from './components/PostList';
import './styles/App.css';

function App() {
  const [value, setValue] = useState("List of posts 1");
  const [value2, setValue2] = useState("List of posts 2");

  let [posts, setPosts] = useState([
    {id: 1, title: "JavaScript", description: "multi-paradigm programming language, supports object-oriented, imperative and functional styles"},
    {id: 2, title: "Pyton", description: "high-level general-purpose programming language with dynamic strong typing and automatic memory management"},
    {id: 3, title: "Java", description: "a strongly typed general-purpose object-oriented programming language developed by Sun Microsystems"}
  ]);

  let [posts2, setPosts2] = useState([
    {id: 1, title: "C++", description: "compiled, statically typed general-purpose programming language"},
    {id: 2, title: "C#", description: "object-oriented programming language"},
    {id: 3, title: "Ruby", description: "dynamic open source programming language with a focus on simplicity and productivity"}
  ]);

  return (
    <div className='App'>
      <input onChange={(e) => setValue(e.target.value)} value={value} type="text" style={{marginTop: "20px"}} />
      <PostList posts={posts} title={value}/>
      <input onChange={(e) => setValue2(e.target.value)} value={value2} type="text" style={{marginTop: "20px"}} />
      <PostList posts={posts2} title={value2}/>
    </div>
  );
}

export default App;
