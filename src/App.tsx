import React, { useMemo, useState } from 'react';
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

  const[selectedSort, setSelectedSort] = useState('');
  const[searchQuery, setSsearchQuery] = useState('');

  const sortedPosts = useMemo(() => {
    console.log('dfasffasdfasdfasdfasd')
    if(selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort as Options].localeCompare(b[selectedSort as Options]))
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, sortedPosts]);

  const createPost = (newPost: IPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post: IPost) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = ((sort: 'title' | 'description') => {
    setSelectedSort(sort);
  })

  return (
    <div className='App'>
      <PostForm create={createPost}/>
      <hr style={{margin: "15px 0"}} />
      <div>
        <MyInput
          type="text"
          value={searchQuery}
          onChange={e => setSsearchQuery(e.target.value)}
          placeholder="search..."
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sorting by"
          options={[
            {value: 'title',  name: 'by title' },
            {value: 'description',  name: 'by description' },
          ]}
        />
      </div>
      {sortedAndSearchedPosts.length
        ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title="My posts"/>
        : <h1 style={{textAlign: 'center'}}>Posts not found</h1>
      }
    </div>
  );
}

export default App;
