import React, { useMemo, useState } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyInput from './components/UI/input/MyInput';
import MySelect, { Options } from './components/UI/select/MySelect';
import { IPost } from './models';
import './styles/App.css';

function App() {

  let [posts, setPosts] = useState([
    {id: 1, title: "JavaScript", description: "multi-paradigm programming language, supports object-oriented, imperative and functional styles"},
    {id: 2, title: "Pyton", description: "high-level general-purpose programming language with dynamic strong typing and automatic memory management"},
    {id: 3, title: "Java", description: "a strongly typed general-purpose object-oriented programming language developed by Sun Microsystems"}
  ]);

  const[filter, setFilter] = useState({sort: '', query: ''});

  const sortedPosts = useMemo(() => {
    if(filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort as Options].localeCompare(b[filter.sort as Options]))
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts]);

  const createPost = (newPost: IPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post: IPost) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className='App'>
      <PostForm create={createPost}/>
      <hr style={{margin: "15px 0"}} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="My posts"/>
    </div>
  );
}

export default App;
