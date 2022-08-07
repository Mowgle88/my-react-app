import React, { useEffect, useState } from 'react';
import PostService from '../API/PostService';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import MyButton from '../components/UI/button/MyButton';
import Loader from '../components/UI/Loader/Loader';
import MyModal from '../components/UI/MyModal/MyModal';
import Pagination from '../components/UI/pagination/Pagination';
import MySelect from '../components/UI/select/MySelect';
// import { useFetching } from './hooks/useFetching';
import { usePosts } from '../hooks/usePosts';
import { IPost } from '../models';
import '../styles/App.css';
import { getPageCount } from '../utils/pages';

function Posts() {

  const [posts, setPosts] = useState<IPost[] | never[]>([]);
  const[filter, setFilter] = useState({sort: '', query: ''});
  const[modal, setModal] = useState(false);
  const[totalPages, setTotalPages] = useState(0);
  const[limit, setLimit] = useState(5);
  const[page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const[isPostsLoading, setIsPostsLoading] = useState(false);

  // const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
  //   const posts = await PostService.getAll();
  //   setPosts(posts);
  // })

  useEffect(() => {
    fetchPosts();
  }, [page, limit])

  async function fetchPosts() {
    setIsPostsLoading(true);
    
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));

    setIsPostsLoading(false);
  }

  const createPost = (newPost: IPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post: IPost) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  const changePage = (page: number) => {
    setPage(page);
  }

  return (
    <div className='App'>
      <MyButton style={{marginTop: "15px"}} onClick={() => setModal(true)}>
        Create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: "15px 0"}} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <MySelect
        value={limit + ''}
        onChange={value => setLimit(+value)}
        defaultValue="Number of items per page"
        options={[
          {value: '5', name:'5'},
          {value: '10', name:'10'},
          {value: '20', name:'20'},
          {value: '-1', name:'show all pages'},
        ]}
      />
      {isPostsLoading
        ? <div style={{display:"flex", justifyContent:"center", marginTop:"50px"}}><Loader /></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="My posts"/>
      }
      <Pagination page={page} totalPages={totalPages} changePage={changePage}/>
    </div>
  );
}

export default Posts;
