'use client'

import { useState } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Home, FolderGit2, Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

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

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Navigation Links for Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/projects">
              <div className="flex items-center gap-2 group">
                <FolderGit2 className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                <span className="font-medium text-gray-600 group-hover:text-blue-600 transition-colors">
                  Projects
                </span>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link href="/projects" onClick={() => setIsOpen(false)}>
              <div className="flex items-center gap-2 group">
                <FolderGit2 className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                <span className="font-medium text-gray-600 group-hover:text-blue-600 transition-colors">
                  Projects
                </span>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <SocialLinks onClick={() => setIsOpen(false)} />
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

function SocialLinks({ onClick }) {
  return (
    <>
      <Link
        href="https://www.linkedin.com/in/manish-gupta-a1b0bb222/"
        className="p-2 rounded-full hover:bg-blue-50 transition-colors group"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
      </Link>
      <Link
        href="https://github.com/wideputin117"
        className="p-2 rounded-full hover:bg-blue-50 transition-colors group"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        <Github className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
      </Link>
      <Link
        href="https://leetcode.com/u/clownhot_96/"
        className="p-2 rounded-full hover:bg-yellow-50 transition-colors group"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
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
        onClick={onClick}
      >
        <Image
          src="https://img.icons8.com/color/48/000000/hackerrank.png"
          alt="Hackerrank"
          width="24"
          height="24"
          className="group-hover:scale-110 transition-transform"
        />
      </Link>
    </>
  );
}
