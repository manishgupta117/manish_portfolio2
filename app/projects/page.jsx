import Image from 'next/image'
import React from 'react'
import { data } from '@/constants/data'
export default function Page() {
  return (
    <div className='h-full main'>
      <main className="flex min-h-screen flex-col p-24">
        <div className='mb-12'>
          <h1 className='text-center'>
            PROJECTS
          </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
           {data && data.map((item)=>(
            <div key={item.title} className='border-2 text-center rounded-xl border-cyan-500' style={{height: '200px' , overflow: 'hidden', position: 'relative'}}>
            <div style={{position: 'relative', height: 'auto', width: '100%', display: 'flex', justifyContent: 'center'}}>
              <Image src={`/${item.img}`} alt='express' objectFit='cover' width={300} height={200} />
            </div>
            <div style={{position: 'absolute', bottom: '0', width: '100%',backgroundColor:'bisque'}}>
              <h1>{item.title}</h1>
            </div>
          </div>
           ))}
        </div>
      </main>
    </div>
  )
}
 
