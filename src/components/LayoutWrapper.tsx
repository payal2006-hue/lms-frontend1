'use client'

import { useState } from 'react'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      {/* Header */}
      <header className="w-full bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold"> Vrixaalabs LMS</h1>
        <nav className="flex space-x-6 justify-evenly w-full">
          <a href="#" className="hover:underline">Dashboard</a>
          <a href="#" className="hover:underline">Courses</a>
          <a href="#" className="hover:underline">Profile</a>
          <a href="#" className="hover:underline">Settings</a>

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
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu" aria-hidden="true"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
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
    </>
  )
}




