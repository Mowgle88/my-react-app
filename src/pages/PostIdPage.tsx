import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
// import { useFetching } from '../hooks/useFetching';

interface IComments {
  body: string,
  email: string,
  id: number,
  name: string,
  postId: number,
}

export default function PostIdPage() {
  const params = useParams();
  const [post, setPost] = useState({title: '', id: ''});
  const [comments, setComments] = useState<IComments[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isComLoading, setComIsLoading] = useState(false);

  // const [fetchPostById, isLoading, error] = useFetching( async (id: string) => {
  //   const response = await PostService.getById(id);
  //   setPost(response.data)
  // })

  useEffect(() => {
    fetchPostById(params.id as string);
    fetchComments(params.id as string);
  }, [])

  async function fetchPostById(id: string) {
    setIsLoading(true);

    const response = await PostService.getById(id);
    setPost(response.data);
    
    setIsLoading(false);
  }

  async function fetchComments(id: string) {
    setComIsLoading(true);

    const response = await PostService.getCommentsByPostId(id);
    setComments(response.data);
    
    setComIsLoading(false);
  }

  return (
    <div className='comment'>
      <h1>PostIdPage {params.id}</h1>
      {isLoading
        ? <Loader />
        : <div>{post.id}.{post.title}</div>}
        <h1>Comments</h1>
        {isComLoading
        ? <Loader />
        : <div>
            {comments.map(comm => 
              <div key={comm.id} style={{marginTop:"15px"}}>
                <h5>{comm.email}</h5>
                <div>{comm.body}</div>
              </div>
            )}
          </div>}
    </div>
  )
}
