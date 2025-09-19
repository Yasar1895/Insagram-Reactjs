import React, { useState } from 'react'
import CommentList from './CommentList'
import { users } from '../data/users'
import { v4 as uuidv4 } from 'uuid'
import { storage } from '../utils/storage'

export default function PostCard({ post, onUpdatePost }) {
  const user = users.find(u => u.id === post.userId)
  const [liked, setLiked] = useState(() => {
    const likes = storage.get('likes', {})
    return likes[post.id] || false
  })
  const [commentsOpen, setCommentsOpen] = useState(false)
  const [commentText, setCommentText] = useState('')

  const toggleLike = () => {
    setLiked(l => {
      const newVal = !l
      const likes = storage.get('likes', {})
      likes[post.id] = newVal
      storage.set('likes', likes)
      onUpdatePost(post.id, { likes: post.likes + (newVal ? 1 : -1) })
      return newVal
    })
  }

  const submitComment = (e) => {
    e.preventDefault()
    if (!commentText.trim()) return
    const newComment = { id: uuidv4(), user: 'you', text: commentText.trim() }
    const newComments = [...post.comments, newComment]
    onUpdatePost(post.id, { comments: newComments })
    setCommentText('')
    setCommentsOpen(true)
  }

  return (
    <article className="bg-white rounded-md border my-4 shadow">
      <div className="flex items-center gap-3 px-4 py-3">
        <img src={user.avatar} alt={user.username} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <div className="font-semibold">{user.username}</div>
          <div className="text-xs text-gray-500">{user.name}</div>
        </div>
      </div>

      <div className="w-full h-[420px] bg-gray-100">
        <img src={post.image} alt="post" className="w-full h-full object-cover" />
      </div>

      <div className="px-4 py-3">
        <div className="flex items-center gap-3">
          <button onClick={toggleLike} className="text-xl">{liked ? '❤️' : '🤍'}</button>
          <button onClick={() => setCommentsOpen(s => !s)} className="text-xl">💬</button>
          <button className="ml-auto text-xl">✈️</button>
        </div>

        <div className="mt-2 text-sm">
          <span className="font-semibold">{post.likes + (liked ? 1 : 0)} likes</span>
        </div>

        <div className="mt-2">
          <div className="text-sm"><span className="font-semibold">{user.username}</span> {post.caption}</div>
          <div className="text-xs text-gray-400 mt-1">{post.timestamp}</div>
        </div>

        <CommentList comments={post.comments} />

        <form onSubmit={submitComment} className="mt-3 flex gap-2 items-center">
          <input
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 border rounded px-3 py-2 text-sm"
          />
          <button className="text-sm font-semibold text-igBlue">Post</button>
        </form>
      </div>
    </article>
  )
}
