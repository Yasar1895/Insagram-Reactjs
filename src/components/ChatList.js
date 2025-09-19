import React from 'react'
import { users } from '../data/users'

// minimal chat list: threads with previews
export default function ChatList({ openThread }) {
  // mock threads
  const threads = [
    { id: 't1', user: users.find(u => u.id === 'alex'), last: 'Hey! saw your photo', time: '2h' },
    { id: 't2', user: users.find(u => u.id === 'maria'), last: 'Brunch tomorrow?', time: '5h' }
  ]

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <h2 className="font-semibold text-lg mb-3">Direct</h2>
      <div className="space-y-3">
        {threads.map(t => (
          <div
            key={t.id}
            className="flex items-center gap-3 p-3 rounded hover:bg-gray-50 cursor-pointer"
            onClick={() => openThread(t)}
          >
            <img src={t.user.avatar} className="w-12 h-12 rounded-full" />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <div className="font-semibold">{t.user.username}</div>
                <div className="text-xs text-gray-400">{t.time}</div>
              </div>
              <div className="text-sm text-gray-500">{t.last}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
