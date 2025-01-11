'use client'

import Link from 'next/link'
import { Github, Linkedin, Home, FolderGit2 } from 'lucide-react'

export default function NavBar() {
  return (
    <div className="px-4 py-2">
      <nav className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Home Section */}
          <Link href="/">
            <div className="flex items-center gap-2 group">
              <Home className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
              <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                Portfolio
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            {/* Projects Link */}
            <Link href="/projects">
              <div className="flex items-center gap-2 group">
                <FolderGit2 className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                <span className="font-medium text-gray-600 group-hover:text-blue-600 transition-colors">
                  Projects
                </span>
              </div>
            </Link>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <Link 
                href="https://www.linkedin.com/in/manish-gupta-a1b0bb222/"
                className="p-2 rounded-full hover:bg-blue-50 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
              </Link>
              
              <Link 
                href="https://github.com/wideputin117"
                className="p-2 rounded-full hover:bg-blue-50 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}