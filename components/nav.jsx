'use client'
import Link from 'next/link'
 
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function NavBar() {
     
   

    return (
        <div className='rounded-xl'>
            <nav className='flex justify-between items-center py-4 rounded-xl border-2 border-blue-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center'>
                <div>
                    <Link href='/'>
                        <span className='text-black hover:text-blue-300 duration-100 font-bold text-xl cursor-pointer ml-2'>
                            Home
                        </span>
                    </Link>
                </div>
                <div className='flex mr-1'>
                    <Link href='/projects'>
                        <span className='text-gray-500 hover:text-cyan-400 duration-200 font-bold text-xl px-4 cursor-pointer'>
                            Projects
                        </span>
                    </Link>
                    <span
                        className='text-gray-500 hover:text-red-400 duration-200 font-bold text-xl px-4 cursor-pointer hover:fill-blue-500'
                       
                    >
                        <Link href={'https://www.linkedin.com/in/manish-gupta-a1b0bb222/'} className='fill-blue-500'> <FontAwesomeIcon icon={faLinkedin} className='fill-blue-500' /></Link>
                        
                    </span>
                    <span
                        className='text-gray-500 hover:text-red-400 duration-200 font-bold text-xl px-4 cursor-pointer'
                       
                    ><FontAwesomeIcon icon={faTwitter} /></span>
                     
                </div>
            </nav>
        </div>
    );
}
