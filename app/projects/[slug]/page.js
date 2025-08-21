import React from 'react'
import { projects } from '../../../data/projects'

function ProjectDetail({ params }) {

    const clickedProject = projects.find(p => p.slug === params.slug)

    if (!clickedProject) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Project not found!</h1>
                    <a href="/projects" className="text-blue-600 hover:underline">Back to Projects</a>
                </div>
            </div>
        )
    }

  return (
   <div className="min-h-screen bg-gray-50 py-20 px-8">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        {clickedProject.name}
      </h1>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {clickedProject.technologies.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
            {tech}
          </span>
        ))}
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <p className="text-lg text-gray-600 leading-relaxed">
          {clickedProject.description}
        </p>
      </div>
      
      <div className="mt-8">
        <a href="/projects" className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
          ← Back to Projects
        </a>
      </div>
    </div>
  </div>
  )
}

export default ProjectDetail