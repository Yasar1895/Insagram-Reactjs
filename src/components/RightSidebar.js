import React from 'react'
import { users } from '../data/users'

export default function RightSidebar() {
  const suggestions = users.filter(u => u.id !== 'you')
  return (
    <aside className="hidden lg:block w-80 px-4">
      <div className="sticky top-20">
        <div className="flex items-center gap-3 mb-4">
          <img src="/images/dp_you.jpg" className="w-12 h-12 rounded-full" />
          <div>
            <div className="font-semibold">you</div>
            <div className="text-sm text-gray-500">Your profile</div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="text-sm text-gray-500 font-semibold">Suggestions for you</div>
          <button className="text-xs">See All</button>
        </div>

        <div className="space-y-3">
          {suggestions.map(s => (
            <div key={s.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={s.avatar} className="w-10 h-10 rounded-full" />
                <div>
                  <div className="text-sm font-semibold">{s.username}</div>
                  <div className="text-xs text-gray-500">{s.bio}</div>
                </div>
              </div>
              <button className="text-sm text-igBlue">Follow</button>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
