'use client'

import Image from 'next/image'
import { data } from '@/constants/data'
import { Github, ExternalLink } from 'lucide-react'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <main className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of my recent work and personal projects main
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data && data.map((project) => (
            <div 
              key={project.title}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={`/${project.img}`}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <div className="flex gap-3">
                    <a 
                      href="#" 
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                      title="View Code"
                    >
                      <Github className="w-5 h-5 text-gray-900" />
                    </a>
                    <a 
                      href="#" 
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-900" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {project.description || "A brief description of the project would go here. Add descriptions to your data array for better context."}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  )) || 
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                    Tech Stack
                  </span>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}