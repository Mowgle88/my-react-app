import React from 'react'
import { IPost } from '../models'
import PostItem from './PostItem'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface PostsProps {
  posts: IPost[],
  title: string,
  remove: (post: IPost) => void
}

export default function PostList({posts, title, remove}: PostsProps) {

  if(!posts.length) {
    return (
      <h1 style={{textAlign: 'center'}}>Posts not found</h1>
    )
  }
  
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{title}</h1>
      <TransitionGroup component={null}>
        {posts.map((post, index) => 
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <PostItem remove={remove} number={index + 1} post={post}/>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  )
}
