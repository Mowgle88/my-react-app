import React from 'react';
import { IPost } from '../models';
import MyButton from './UI/button/MyButton';
import { useNavigate } from 'react-router-dom';

interface PostProps {
  post: IPost,
  number: number,
  remove: (post: IPost) => void
}

export default function PostItem(props: PostProps) {
  const navigate = useNavigate();
  console.log();
  return (
    <div className='post'>
        <div className='post__content'>
          <strong>{props.post.id}. {props.post.title}</strong>
          <div>{props.post.body}</div>
        </div>
        <div className='post__btns'>
          <MyButton onClick={() => navigate(`./${props.post.id}`, { replace: false })}>Open</MyButton>
          <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
        </div>
      </div>
  )
}
