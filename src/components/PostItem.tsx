import React from 'react'
import { IPost } from '../models'

interface PostProps {
  post: IPost,
  number: number
}

export default function PostItem(props: PostProps) {
  return (
    <div className='post'>
        <div className='post__content'>
          <strong>{props.number}. {props.post.title}</strong>
          <div>{props.post.description}</div>
        </div>
        <div className='post__btns'>
          <button>Delete</button>
        </div>
      </div>
  )
}
