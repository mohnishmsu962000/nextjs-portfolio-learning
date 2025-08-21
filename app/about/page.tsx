import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          About Me
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <p className="text-lg text-gray-600 mb-6">
            I'm a passionate developer learning modern web technologies. Currently diving deep into React, Next.js, and TypeScript to build full-stack applications. I love solving problems through code and creating user-friendly interfaces.
          </p>
          
          <p className="text-lg text-gray-600 mb-6">
            I'm currently exploring React, Next.js, TypeScript, and Tailwind CSS to build production-ready SaaS applications. My goal is to master full-stack development and modern JavaScript patterns.
          </p>
          
          <p className="text-lg text-gray-600">
            When I'm not coding, I enjoy exploring new technologies and building side projects to practice what I've learned. Feel free to check out my projects or get in touch!
          </p>
        </div>
      </div>
    </div>
  )
}

export default About