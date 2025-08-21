import React from 'react'
import { projects } from '../../data/projects'
import Link from 'next/link'

function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects.map((project) => (
    <div key={project.slug} className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-3">{project.name}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      
      <div className="flex space-x-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded">
            {tech}
          </span>
        ))}
      </div>
      
      <Link href={`/projects/${project.slug}`} className="text-blue-600 hover:underline">
        View Details →
      </Link>
    </div>
  ))}
</div>
  )
}

export default Projects