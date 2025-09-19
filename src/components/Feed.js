import React from 'react'
import PostCard from './PostCard'
import { posts as initialPosts } from '../data/posts'
import { storage } from '../utils/storage'

export default function Feed() {
  // keep posts in state and persist small changes to localStorage
  const [posts, setPosts] = React.useState(() => storage.get('posts', initialPosts))

  React.useEffect(() => {
    storage.set('posts', posts)
  }, [posts])

  const updatePost = (id, changes) => {
    setPosts(prev => prev.map(p => p.id === id ? { ...p, ...changes } : p))
  }

  return (
    <section className="w-full max-w-2xl mx-auto">
      {posts.map(p => (
        <PostCard key={p.id} post={p} onUpdatePost={updatePost} />
      ))}
    </section>
  )
}
