'use client'
import React, { useState } from 'react'

interface ContactFormData{
    name: string,
    email: string,
    message?: string
}

function ContactForm() {

    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        message: ""
    })

    const [success, setSuccess] = useState(false)

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){

        e.preventDefault()

        setSuccess(true)

        setFormData({
            name: "",
            email: "",
            message: ""
        })

    }

  return (
    <div className='w-full mx-auto h-full pt-4 pb-4'>
        <form onSubmit={handleSubmit} className='grid space-y-4 pl-3 pr-3 justify-items-center'>
            {success && <h3 className='text-green-600'>Form submitted successfully.</h3>}
            <input 
            className='w-full border border-black text-gray-900 focus:ring-2 rounded-md pl-3 pr-3 pt-2 pb-2'
            type='text' 
            placeholder='Enter Your Name'
            value={formData.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({
                ...formData, name: e.target.value
            })}
            />
            <input 
            className='w-full border border-black text-gray-900 focus:ring-2 rounded-md pl-3 pr-3 pt-2 pb-2'
            type='email' 
            placeholder='Enter Your Email'
            value={formData.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({
                ...formData, email: e.target.value
            })}
            />
            <textarea 
            className='w-full border border-black text-gray-900 focus:ring-2 rounded-md pl-3 pr-3 pt-2 pb-2'
            placeholder='Enter Custom Message'
            value={formData.message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({
                ...formData, message: e.target.value
            })}
            />
            <button 
            className='bg-gray-800 p-2 pr-4 pl-4 rounded-xl font-bold w-fit'
            type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ContactForm