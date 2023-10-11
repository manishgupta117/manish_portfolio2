import Link from 'next/link'
import React from 'react'
 import Image from 'next/image'

export default function NavBar() {
    return (
        <div className='rounded-xl'>
            <nav className="flex justify-between items-center py-4 rounded-xl border-2 border-blue-300 bg-gradient-to-r from-cyan-200 to-red-100 text-center">
                <div>
                    <Link href='/'>
                        <span className="text-gray-500 hover:text-blue-300 duration-100 font-bold text-xl cursor-pointer ml-2">Home</span>
                    </Link>
                </div>
                <div className="flex mr-1">
                    
                    <Link href='/projects'>
                        <span className="text-gray-500 hover:text-cyan-400 duration-200 font-bold text-xl px-4 cursor-pointer">Projects</span>
                    </Link>
                     
                        <span className="text-gray-500 hover:text-red-400 duration-200 font-bold text-xl px-4 cursor-pointer">Socials</span>
                </div>
            </nav>
        </div>
    )
}
