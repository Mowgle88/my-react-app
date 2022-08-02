import React, { useMemo } from 'react'
import { Options } from '../components/UI/select/MySelect';
import { IPost } from '../models';

export function useSortedPosts(posts: IPost[], sort: string) {

  const sortedPosts = useMemo(() => {
    if(sort) {
      return [...posts].sort((a, b) => a[sort as Options].localeCompare(b[sort as Options]))
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts;
}

export function usePosts(posts: IPost[], sort: string, query: string) {

  const sortedPosts = useSortedPosts(posts, sort)

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
  }, [query, sortedPosts]);

  return sortedAndSearchedPosts;
}