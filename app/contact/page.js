import React from 'react'

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Contact Me
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Get In Touch</h3>
              <p className="text-gray-600 mb-6">
                I'm always interested in new opportunities and collaborations. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="font-semibold text-gray-800 w-20">Email:</span>
                  <span className="text-gray-600">mohnishmsu962000@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-800 w-20">LinkedIn:</span>
                  <span className="text-gray-600">linkedin.com/in/mohnishsunil</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-800 w-20">GitHub:</span>
                  <span className="text-gray-600">github.com/mohnishmsu962000</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Message</h3>
              <p className="text-gray-600 mb-4">Contact form coming soon!</p>
              <div className="bg-gray-100 p-4 rounded">
                <p className="text-sm text-gray-500">
                  For now, feel free to reach out via email or LinkedIn. 
                  I'll be adding a contact form in future updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact