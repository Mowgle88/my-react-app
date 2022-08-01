import React from 'react'
import { IPost } from '../models'
import MyButton from './UI/button/MyButton'

interface PostProps {
  post: IPost,
  number: number,
  remove: (post: IPost) => void
}

export default function PostItem(props: PostProps) {
  return (
    <div className='post'>
        <div className='post__content'>
          <strong>{props.number}. {props.post.title}</strong>
          <div>{props.post.description}</div>
        </div>
        <div className='post__btns'>
          <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
        </div>
      </div>
  )
}
