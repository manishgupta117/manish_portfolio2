import Image from 'next/image'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <main className="flex-1">
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="text-center md:text-left space-y-4">
                <h1 className="text-5xl font-bold text-gray-900">
                  Hi, I am <span className="text-blue-600">Manish</span>
                </h1>
                <h2 className="text-2xl text-gray-600">Web Developer</h2>
                <div className="flex gap-4 justify-center md:justify-start">
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                    <Github className="w-6 h-6" />
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                    <Mail className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 blur opacity-75"></div>
                <Image
                  src="/main.png"
                  alt="Profile"
                  width={200}
                  height={200}
                  className="relative rounded-full border-4 border-white"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
            Hello, I&apos;m Manish, a passionate MERN Stack Developer with a knack for crafting dynamic web applications. 
            With a strong foundation in MongoDB, Express.js, React, and Node.js, I bring ideas to life by seamlessly 
            merging front-end and back-end technologies. My commitment to clean code and responsive design ensures 
            that every project I undertake is user-friendly and performs flawlessly.
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { src: '/db.svg', alt: 'MongoDB' },
                { src: '/node.svg', alt: 'Node.js' },
                { src: '/rc.svg', alt: 'React' },
                { src: '/ex.svg', alt: 'Express' },
                { src: '/next.svg', alt: 'Next.js' },
                { src: '/tlwnd.svg', alt: 'Tailwind' }
              ].map((tech, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                  <div className="relative flex items-center justify-center p-4 bg-white rounded-lg">
                    <Image
                      src={tech.src}
                      alt={tech.alt}
                      width={80}
                      height={80}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Interests */}
        <section className="py-20 bg-white px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Education</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-2">Bachelor&apos;s in Computer Science</h3>
                <p className="text-gray-600">Himgiri Zee University, 2023</p>
                  <p className="mt-4 text-gray-600">
                    Graduated with a strong foundation in computer science and problem-solving skills,
                    preparing for a successful career in technology.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Interests</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-3 text-gray-600">
                    <li>• Reading tech blogs to stay updated with latest trends</li>
                    <li>• Playing chess to enhance strategic thinking</li>
                    <li>• Watching movies and anime for entertainment</li>
                    <li>• Regular gym workouts for physical fitness</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 px-4">
        <div className="max-w-4xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Manish&apos;s Portfolio. All rights reserved by Manish.</p>
        </div>
      </footer>
    </div>
  );
}