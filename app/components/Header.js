import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <nav className='bg-white shadow-md'> 
        <div className='flex justify-between items-center px-8 py-4'> 
            <div className='text-xl font-bold text-gray-900'> Mohnish. </div>
            <div className='flex space-x-6'> 
            <Link href="/"  className='text-gray-600 hover:text-gray-800'>Home</Link>
            <Link href="/about" className='text-gray-600 hover:text-gray-800'>About</Link> 
            <Link href="/proejcts" className='text-gray-600 hover:text-gray-800'>Projects</Link>
            <Link href="/contact" className='text-gray-600 hover:text-gray-800'>Contact</Link>
            </div>
        </div>
    </nav>
  )
}

export default Header