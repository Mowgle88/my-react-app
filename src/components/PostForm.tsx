import React, { useState } from 'react'
import { IPost } from '../models';
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

interface PostFormProps {
  create: (newPost: IPost) => void
}

export default function PostForm({create}: PostFormProps) {

  const [post, setPost] = useState({
    title: "", description: ""
  });

  const addNewPost = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newPost ={...post, id: Date.now()}
    create(newPost)
    setPost({title: "", description: ""});
  }
  
  return (
    <form action="">
        <MyInput
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text"
          placeholder="post title"
        />
        <MyInput
          value={post.description}
          onChange={e => setPost({...post, description: e.target.value})}
          type="text"
          placeholder="post description"
        />
        <MyButton onClick={addNewPost} disabled={false}>Create post</MyButton>
      </form>
  )
}
