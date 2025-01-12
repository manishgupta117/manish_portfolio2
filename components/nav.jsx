'use client'

import Link from 'next/link'
import { Github, Linkedin, Home, FolderGit2, TerminalSquare } from 'lucide-react'
import Image from 'next/image'

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

              <Link 
                href="https://leetcode.com/u/clownhot_96/"
                className="p-2 rounded-full hover:bg-yellow-50 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image 
                  src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png" 
                  alt="LeetCode" 
                  width="24" 
                  height="24" 
                  className="group-hover:scale-110 transition-transform"
                />
              </Link>
               <Link 
                href="https://www.hackerrank.com/profile/takermanish7"
                className="p-2 rounded-full hover:bg-green-50 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image 
                  src="https://img.icons8.com/color/48/000000/hackerrank.png" 
                  alt="Hackerrank" 
                  width="24" 
                  height="24" 
                  className="group-hover:scale-110 transition-transform"
                />              
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}