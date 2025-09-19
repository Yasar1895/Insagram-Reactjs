import React from 'react'
import NavBar from './components/NavBar'
import StoryBar from './components/StoryBar'
import Feed from './components/Feed'
import RightSidebar from './components/RightSidebar'
import StoryViewer from './components/StoryViewer'
import ChatList from './components/ChatList'
import ChatThread from './components/ChatThread'
import Footer from './components/Footer'

export default function App() {
  const [storyOpen, setStoryOpen] = React.useState(false)
  const [currentStory, setCurrentStory] = React.useState(null)

  const [chatListOpen, setChatListOpen] = React.useState(false)
  const [activeThread, setActiveThread] = React.useState(null)

  const openStory = (s) => {
    setCurrentStory(s)
    setStoryOpen(true)
  }

  const openChatList = () => {
    setChatListOpen(true)
  }

  const openThread = (t) => {
    setActiveThread(t)
    setChatListOpen(false)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar onOpenChat={openChatList} />
      <main className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-[1fr,320px] gap-6">
        <div>
          <StoryBar onOpenStory={openStory} />
          <Feed />
          <Footer />
        </div>

        <RightSidebar />
      </main>

      <StoryViewer open={storyOpen} story={currentStory} onClose={() => setStoryOpen(false)} />

      {/* Chat UI overlays */}
      {chatListOpen && <ChatList openThread={openThread} />}
      {activeThread && <ChatThread thread={activeThread} onClose={() => setActiveThread(null)} />}
    </div>
  )
}
