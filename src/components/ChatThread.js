import React, { useState } from 'react'
import { users } from '../data/users'
import { storage } from '../utils/storage'
import { v4 as uuidv4 } from 'uuid'

export default function ChatThread({ thread, onClose }) {
  const { user } = thread
  // each thread stored in localStorage under key `chat_thread_${user.id}`
  const key = `chat_thread_${user.id}`
  const [messages, setMessages] = useState(() => storage.get(key, [
    { id: uuidv4(), from: user.id, text: `Hi! This is ${user.username}` },
    { id: uuidv4(), from: 'you', text: 'Hello! Nice to connect.' }
  ]))
  const [text, setText] = useState('')

  const send = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    const msg = { id: uuidv4(), from: 'you', text: text.trim() }
    const next = [...messages, msg]
    setMessages(next)
    storage.set(key, next)
    setText('')
    // simulate auto-reply for demonstration
    setTimeout(() => {
      const reply = { id: uuidv4(), from: user.id, text: 'Thanks! 😊' }
      const after = [...next, reply]
      setMessages(after)
      storage.set(key, after)
    }, 800)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded shadow-lg overflow-hidden">
        <div className="flex items-center justify-between p-3 border-b">
          <div className="flex items-center gap-3">
            <img src={user.avatar} className="w-10 h-10 rounded-full" />
            <div>
              <div className="font-semibold">{user.username}</div>
              <div className="text-xs text-gray-500">{user.name}</div>
            </div>
          </div>
          <div>
            <button onClick={onClose} className="text-sm text-gray-600">Close</button>
          </div>
        </div>

        <div className="h-[60vh] overflow-y-auto p-4 bg-gray-50 space-y-3">
          {messages.map(m => (
            <div key={m.id} className={`flex ${m.from === 'you' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] px-3 py-2 rounded ${m.from === 'you' ? 'bg-igBlue text-white' : 'bg-white border'}`}>
                {m.text}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={send} className="p-3 border-t flex gap-2">
          <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Message..." className="flex-1 border rounded px-3 py-2" />
          <button className="bg-igBlue text-white px-4 py-2 rounded">Send</button>
        </form>
      </div>
    </div>
  )
}
