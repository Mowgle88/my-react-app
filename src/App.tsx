import React, { useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import { IPost } from './models';
import './styles/App.css';

function App() {

  let [posts, setPosts] = useState([
    {id: 1, title: "JavaScript", description: "multi-paradigm programming language, supports object-oriented, imperative and functional styles"},
    {id: 2, title: "Pyton", description: "high-level general-purpose programming language with dynamic strong typing and automatic memory management"},
    {id: 3, title: "Java", description: "a strongly typed general-purpose object-oriented programming language developed by Sun Microsystems"}
  ]);

  const createPost = (newPost: IPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className='App'>
      <PostForm create={createPost}/>
      <PostList posts={posts} title="My posts"/>
    </div>
  );
}

export default App;
