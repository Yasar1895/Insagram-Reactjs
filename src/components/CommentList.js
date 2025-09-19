import React from 'react'
import { users } from '../data/users'

export default function CommentList({ comments = [] }) {
  return (
    <div className="mt-3">
      {comments.map(c => {
        const u = users.find(s => s.username === c.user) || users.find(s => s.id === c.user)
        return (
          <div key={c.id} className="text-sm">
            <span className="font-semibold">{u ? u.username : c.user}</span> {c.text}
          </div>
        )
      })}
    </div>
  )
}
