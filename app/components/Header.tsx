"use client"
import Link from 'next/link'
import React, { useState } from 'react'

function Header() {

    const [menu, setMenu] = useState(false)

    function handleExpand(){
        setMenu(!menu)
    }
  return (
    <nav className='bg-white shadow-md border border-b-2'> 
        <div className='hidden justify-between items-center px-8 py-4 md:flex'> 
            <Link href="/" className='text-xl font-bold text-gray-900'> Mohnish. </Link>
            <div className='flex space-x-6'> 
            <Link href="/"  className='text-gray-600 hover:text-gray-800'>Home</Link>
            <Link href="/about" className='text-gray-600 hover:text-gray-800'>About</Link> 
            <Link href="/projects" className='text-gray-600 hover:text-gray-800'>Projects</Link>
            <Link href="/contact" className='text-gray-600 hover:text-gray-800'>Contact</Link>
            </div>
        </div>
        <div className='flex justify-between items-center px-8 py-4 md:hidden'>
            <Link href="/" className='text-xl font-bold text-gray-900'> Mohnish. </Link>
            <button className='text-2xl text-gray-600 hover:text-gray-800' onClick={handleExpand}>
            {menu ? '✕' : '☰'}
            </button>
            
        </div>
        <div>{menu && 
                <div className='flex flex-col space-y-4 px-8 py-4 bg-white border-t'> 
            <Link href="/"  className='text-gray-600 hover:text-gray-800 py-2' onClick={() => setMenu(false)}>Home</Link>
            <Link href="/about" className='text-gray-600 hover:text-gray-800 py-2' onClick={() => setMenu(false)}>About</Link> 
            <Link href="/projects" className='text-gray-600 hover:text-gray-800 py-2' onClick={() => setMenu(false)}>Projects</Link>
            <Link href="/contact" className='text-gray-600 hover:text-gray-800 py-2' onClick={() => setMenu(false)}>Contact</Link>
            </div>
                }</div>
    </nav>
  )
}

export default Header