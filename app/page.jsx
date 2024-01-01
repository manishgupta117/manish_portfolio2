import Image from 'next/image'
import Link from 'next/link'
 
 

export default function Home() {
  return (
    <div> 
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24 main">
        
      <div className='flex flex-row items-center justify-center h-3'>
            <div>
              <Image src='/main.png' alt='main_image' width={100} height={70} className='rounded-full drop-shadow-2xl shadow-lg shadow-cyan-500/50 border-3 border-black'></Image>
            </div>
        <div className='intro ml-2 text-base flex flex-col items-center justify-center text-center text-black m-28'>
              <h1>
                <span id='name' className="text-4xl font-bold"> Hi, I am Manish</span>
              </h1>
            <h3 id='name2' className="text-2xl font-medium">I am a Web Developer</h3>
        </div>
      </div>

   <div className='flex text-white flex-col mr-5 ml-10 p-4 mt-10'> 
          <div className='main2 h-auto text-white w-96 rounded-xl mt-16 p-5 bg-gray-100 md:w-1/2 border-2 border-blue-200 overflow-hidden'>
                <h1 className="text-3xl font-bold mb-5 text-white text-center text_color">ABOUT ME</h1>
                <p className="text-lg text-justify tracking-tighter md:tracking-tight text-white text-wrap">Hello, I&apos;m Manish, a passionate MERN Stack Developer with a knack for crafting dynamic web applications. With a strong foundation in MongoDB, Express.js, React, and Node.js, I bring ideas to life by seamlessly merging front-end and back-end technologies. My commitment to clean code and responsive design ensures that every project I undertake is user-friendly and performs flawlessly. I thrive on solving complex problems and continually expanding my skillset to stay at the forefront of web development trends. Explore my portfolio to see how I can transform your digital vision into reality.</p>
          </div>
          <div className='main2 rounded-xl w-96 mt-16 p-5 bg-gray-100 md:w-1/2 mr-3 ml-auto border-2 border-blue-300'>
                <h1 className="text-3xl font-bold mb-5 text-center text_color">TECH STACK</h1>
                  <div className='flex flex-row justify-evenly flex-wrap '> 
                      <Image src= '/db.svg' alt='main_image' width={100} height={70} className='rounded-full drop-shadow-2xl border-2 border-cyan-300'></Image>
                      <Image src='/node.svg' alt='main_image' width={100} height={70} className='rounded-full drop-shadow-2xl border-2 border-cyan-300'></Image> 
                      <Image src='/rc.svg' alt='main_image' width={100} height={70} className='rounded-full drop-shadow-2xl border-2 border-cyan-300'></Image>
                      <Image src='/ex.svg' alt='main_image' width={100} height={70} className='rounded-full bg-slate-50 drop-shadow-2xl border-2 border-cyan-300'></Image>
                      <Image src='/next.svg' alt='main_image' width={100} height={70} className='rounded-full bg-slate-50 drop-shadow-2xl border-2 border-cyan-300'></Image>
                      <Image src='/tlwnd.svg' alt='main_image' width={100} height={70} className='rounded-full drop-shadow-2xl border-2 border-cyan-300'></Image>
                  
                  </div>
          </div>
              <div className='main2 rounded-xl w-96 h-2/4\ mt-16 p-5 md:w-1/2 border-2 border-blue-400'>
                <h1 className="text-3xl font-bold mb-5 text-center text_color">EDUCATION</h1>
                <p className="text-lg text-justify">I graduated from Himgiri Zee University in 2023, completing my studies with a Bachelor&apos;s degree in Computer Science. This educational journey has equipped me with a strong foundation in technology and problem-solving skills, preparing me for a successful career in the dynamic field of computer science and engineering. I am eager to leverage my education to contribute to innovative and impactful projects in the tech industry.</p>
              </div>
          
          <div className='main2 rounded-xl mt-16 p-5 w-96 md:w-1/2 border-2 border-blue-500 mr-3 ml-auto'>
            <h1 className="text-3xl font-bold mb-5 text-center text_color">HOBBIES / INTERESTS</h1>
            <p className="text-lg text-justify">In my free time, I have a diverse range of interests. I enjoy staying updated on the latest tech trends by reading tech blogs. For mental stimulation, I indulge in chess, a game that sharpens my strategic thinking. To unwind, I&apos;m an avid fan of movies and anime. Additionally, I maintain a healthy lifestyle by regularly hitting the gym, prioritizing both mental and physical well-being.</p>
          </div>
    </div>
     
    </main>
     
    <footer className="flex-shrink-0 py-4 bg-gray-600 border-spacing-1 border-2 border-black rounded-sm text-white text-center">
      <p>&copy; 2023 My Portfolio. All rights reserved.</p>
    </footer>
    </div>
    )
    }
