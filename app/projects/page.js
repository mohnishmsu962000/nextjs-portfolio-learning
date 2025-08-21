import React from 'react'

function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          My Projects
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Portfolio Website</h3>
            <p className="text-gray-600 mb-4">Personal portfolio built with Next.js and Tailwind CSS</p>
            <div className="flex space-x-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded">Next.js</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded">Tailwind</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Task Manager</h3>
            <p className="text-gray-600 mb-4">React-based task management application</p>
            <div className="flex space-x-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded">React</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded">TypeScript</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Coming Soon</h3>
            <p className="text-gray-600 mb-4">More projects will be added as I continue learning</p>
            <div className="flex space-x-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded">In Progress</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects