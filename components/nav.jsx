'use client'
import Link from 'next/link'
 
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin ,faGithub,faLeetCode } from '@fortawesome/free-brands-svg-icons'

export default function NavBar() {
     
   

    return (
        <div className='rounded-xl'>
            <nav id='background' className='flex justify-between items-center py-4 rounded-xl border-2 border-blue-300 text-center'>
                <div>
                    <Link href='/'>
                        <span className='text-black hover:text-blue-300 duration-100 font-bold text-xl cursor-pointer ml-2'>
                            Home
                        </span>
                    </Link>
                </div>
                <div className='flex mr-1'>
                    <Link href='/projects'>
                        <span className='text-gray-500 hover:text-blue-400 duration-200 font-bold text-xl px-4 cursor-pointer'>
                            Projects
                        </span>
                    </Link>
                    <span className='text-gray-500 hover:text-blue-500 duration-200 font-bold text-xl px-4 cursor-pointer hover:fill-blue-500'>
                        <Link href={'https://www.linkedin.com/in/manish-gupta-a1b0bb222/'} className='fill-blue-500'> <FontAwesomeIcon icon={faLinkedin} className='fill-blue-500' /></Link>
                    </span>
                    <span className='text-gray-500 hover:text-blue-500 duration-200 font-bold text-xl px-4 cursor-pointer'>
                        <Link href={'https://github.com/wideputin117'}><FontAwesomeIcon icon={faGithub} className='fill-blue-500' /></Link>
                    </span>
                    {/* <span className='text-gray-500 hover:text-blue-500 duration-200 font-bold text-xl px-4 cursor-pointer'>
                        <Link href={'https://github.com/wideputin117'}><FontAwesomeIcon icon={faLeetCode} className='fill-blue-500' /></Link>
                    </span> */}
                     
                </div>
            </nav>
        </div>
    );
}
