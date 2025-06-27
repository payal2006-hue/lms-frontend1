'use client'

import { useState } from 'react'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [showLoginPanel, setShowLoginPanel] = useState(false)

  const handleLoginClick = () => {
    setShowLoginPanel(true)
  }

  const handleCloseLoginPanel = () => {
    setShowLoginPanel(false)
  }

  return (
    <>
      {/* Header */}
      <header className="w-full bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Vrixaalabs LMS</h1>
        <nav className="flex space-x-6 justify-evenly w-full">
          <a href="#" className="hover:underline">Dashboard</a>
          <a href="#" className="hover:underline">Courses</a>
          <a href="#" className="hover:underline">Profile</a>
          <a href="#" className="hover:underline">Settings</a>
          <button
            onClick={handleLoginClick}
            className="hover:underline focus:outline-none px-4 py-1 bg-white text-black rounded"
          >
            Login
          </button>
        </nav>
      </header>

      {/* Body */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`bg-[#ADD8E6] text-black h-screen p-4 transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-5'}`}
        >
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-sm text-black mb-4"
          >
            {isSidebarOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
            )}
          </button>
          {isSidebarOpen && (
            <nav className="space-y-4 text-sm">
              <a href="#" className="block hover:text-blue-700">Dashboard</a>
              <a href="#" className="block hover:text-blue-700">Courses</a>
              <a href="#" className="block hover:text-blue-700">Profile</a>
            </nav>
          )}
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 bg-[#ADD8E6] text-black">
          <h2 className="text-2xl font-bold"></h2>
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-200 text-center py-4 text-sm text-gray-700 mt-auto">
        &copy; 2025 LMS. All rights reserved.
      </footer>

      {/* Login Modal */}
      {showLoginPanel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white p-8 rounded-lg w-[400px] relative text-black">
            {/* Close Button */}
            <button onClick={handleCloseLoginPanel} className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl">
              ✕
            </button>
            <h2 className="text-2xl font-bold text-center mb-6 text-black">Login</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-black">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-black">Password</label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Enter your password"
                />
                <div className="text-right mt-1 text-sm">
                  <a href="#" className="text-blue-500 hover:underline">Forgot Password</a>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Login
              </button>
              <div className="text-sm flex justify-between items-center mt-2">
                <span className="text-gray-700">Do not have an account?</span>
                <button
                  type="button"
                  className="text-blue-600 hover:underline"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}














