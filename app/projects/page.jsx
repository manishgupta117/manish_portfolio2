import Image from 'next/image'
import React from 'react'

export default function Page() {
  return (
    <div className='h-full main'>
      <main className="flex min-h-screen flex-col p-24">
        <div className='mb-12'>
          <h1 className='text-center'>
            PROJECTS
          </h1>
        </div>
        <div className='grid grid-cols-3 gap-4'>
        
          <div className='border-2 text-center rounded-xl border-cyan-500' style={{height: '200px' , overflow: 'hidden', position: 'relative'}}>
            <div style={{position: 'relative', height: 'auto', width: '100%', display: 'flex', justifyContent: 'center'}}>
              <Image src='/weather.svg' alt='express' objectFit='cover' width={300} height={200} />
            </div>
            <div style={{position: 'absolute', bottom: '0', width: '100%',backgroundColor:'bisque'}}>
              <h1>Weather Application</h1>
            </div>
          </div>
          <div className='border-2 text-center rounded-xl border-cyan-500' style={{height: '200px' , overflow: 'hidden', position: 'relative'}}>
            <div style={{position: 'relative', height: 'auto', width: '100%',display: 'flex', justifyContent: 'center'}}>
              <Image src='/Translation-icon.svg' alt='express' width={250} height={200} objectFit='cover' />
            </div>
            <div style={{position: 'absolute', bottom: '0', width: '100%', zIndex: '1', backgroundColor: 'bisque', opacity: '0.6'}}>
              <h1 style={{opacity: '1'}}>Text Translation</h1>
            </div>
          </div>
          <div className='border-2 text-center rounded-xl border-cyan-500' style={{height: '200px' , overflow: 'hidden', position: 'relative'}}>
            <div style={{position: 'relative', height: 'auto', width: '100%', display:'flex', justifyContent:'center'}}>
              <Image src='/blog.svg' alt='express' width={220} height={180} objectFit='cover' />
            </div>
            <div style={{position: 'absolute', bottom: '0', width: '100%',backgroundColor:'bisque'}}>
              <h1>Blogg App</h1>
            </div>
          </div>
          <div className='border-2 text-center rounded-xl border-cyan-500' style={{height: '200px' , overflow: 'hidden', position: 'relative'}}>
            <div style={{position: 'relative', height: 'auto', width: '100%',display:'flex', justifyContent:'center'}}>
              <Image src='/quote.svg' alt='express' width={170} height={180} objectFit='cover' />
            </div>
            <div style={{position: 'absolute', bottom: '0', width: '100%',backgroundColor:'bisque'}}>
              <h1>Random Quote Generator</h1>
            </div>
          </div>
          <div className='border-2 text-center rounded-xl border-cyan-500' style={{height: '200px' , overflow: 'hidden', position: 'relative'}}>
            <div style={{position: 'relative', height: 'auto', width: '100%',display:'flex', justifyContent:'center'}}>
              <Image src='/chat.svg' alt='express' width={180} height={100} objectFit='cover' />
            </div>
            <div style={{position: 'absolute', bottom: '0', width: '100%',backgroundColor:'bisque'}}>
              <h1>Chat App</h1>
            </div>
          </div>
          <div className='border-2 text-center rounded-xl border-cyan-500' style={{height: '200px' , overflow: 'hidden', position: 'relative'}}>
            <div style={{position: 'relative', height: 'auto', width: '100%',display:'flex', justifyContent:'center',zIndex:'0'}}>
              <Image src='/to-do-list.svg' alt='express' width={180} height={100} objectFit='cover' />
            </div>
            <div style={{position: 'absolute', bottom: '0', width: '100%' ,zIndex:'5',backgroundColor:'bisque'}}>
              <h1>To do App</h1>
            </div>
          </div>
          <div className='border-2 text-center rounded-xl border-cyan-500' style={{height: '200px' , overflow: 'hidden', position: 'relative'}}>
            <div style={{position: 'relative', height: 'auto', width: '100%',display:'flex', justifyContent:'center'}}>
              <Image src='/business-chat.svg' alt='express' width={180} height={100} objectFit='cover' />
            </div>
            <div style={{position: 'absolute', bottom: '0', width: '100%',backgroundColor:'bisque'}}>
              <h1>Chat Gpt App</h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
 
