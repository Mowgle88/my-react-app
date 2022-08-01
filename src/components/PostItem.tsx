import React from 'react'
import { IPost } from '../models'

interface PostProps {
  post: IPost,
}

export default function PostItem({post}: PostProps) {
  return (
    <div className='post'>
        <div className='post__content'>
          <strong>{post.title}</strong>
          <div>{post.description}</div>
        </div>
        <div className='post__btns'>
          <button>Delete</button>
        </div>
      </div>
  )
}
