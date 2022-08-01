import React from 'react'
import { IPost } from '../models'
import PostItem from './PostItem'

interface PostsProps {
  posts: IPost[],
  title: string
}

export default function PostList({posts, title}: PostsProps) {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{title}</h1>
      {posts.map(post => <PostItem post={post} key={post.id}/>)}
    </div>
  )
}
