import React from 'react'
import { FaInstagram, FaHeart, FaPaperPlane, FaPlusSquare } from 'react-icons/fa'

export default function NavBar({ onOpenChat }) {
  return (
    <header className="w-full border-b bg-white sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <FaInstagram className="text-3xl text-igBlue" />
          <div className="text-2xl font-extrabold tracking-tight">Instgeam</div>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded hover:bg-gray-100">
            Explore
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <FaPlusSquare />
          </button>
          <button onClick={onOpenChat} className="p-2 hover:bg-gray-100 rounded" aria-label="Open chat">
            <FaPaperPlane />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <FaHeart />
          </button>
          <img src="/images/dp_you.jpg" alt="you" className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </header>
  )
}
