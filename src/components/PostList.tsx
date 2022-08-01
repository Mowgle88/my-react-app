import React from 'react'
import { IPost } from '../models'
import PostItem from './PostItem'

interface PostsProps {
  posts: IPost[],
  title: string,
  remove: (post: IPost) => void
}

export default function PostList({posts, title, remove}: PostsProps) {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{title}</h1>
      {posts.map((post, index) => <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>)}
    </div>
  )
}
