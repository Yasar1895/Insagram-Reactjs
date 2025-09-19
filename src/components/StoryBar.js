import React from 'react'
import StoryItem from './StoryItem'
import { users } from '../data/users'

export default function StoryBar({ onOpenStory }) {
  // show stories for all users (you can mark seen/unseen with state)
  const stories = [
    { user: users.find(u => u.id === 'alex'), image: '/images/story_alex.jpg' },
    { user: users.find(u => u.id === 'maria'), image: '/images/story_maria.jpg' }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-4">
      <div className="flex gap-4 overflow-x-auto">
        {stories.map((s, idx) => (
          <StoryItem key={idx} user={s.user} image={s.image} onOpen={() => onOpenStory(s)} />
        ))}
      </div>
    </div>
  )
}
