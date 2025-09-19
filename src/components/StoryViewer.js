import React from 'react'
import { FaTimes } from 'react-icons/fa'

export default function StoryViewer({ open, story, onClose }) {
  if (!open || !story) return null
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <div className="flex items-center gap-3">
            <img src={story.user.avatar} alt={story.user.username} className="w-10 h-10 rounded-full" />
            <div>
              <div className="font-semibold">{story.user.username}</div>
              <div className="text-xs text-gray-500">Story</div>
            </div>
          </div>
          <button onClick={onClose}><FaTimes /></button>
        </div>

        <div className="aspect-[9/16] bg-black">
          <img src={story.image} alt="story" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}
