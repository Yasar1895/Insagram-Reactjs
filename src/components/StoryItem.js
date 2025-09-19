import React from 'react'

export default function StoryItem({ user, image, onOpen }) {
  return (
    <div className="flex flex-col items-center w-auto">
      <div
        className="w-20 h-20 rounded-full p-1 story-ring cursor-pointer"
        onClick={onOpen}
      >
        <img src={user.avatar} alt={user.username} className="w-full h-full rounded-full border-2 border-white object-cover" />
      </div>
      <div className="text-xs mt-2">{user.username}</div>
    </div>
  )
}
