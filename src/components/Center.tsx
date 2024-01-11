import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Nicepic from '@/image/Nicepic.jpg'
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Sidebar from '@/components/Sidebar'



function Center() {
  return (
    <div className='flex-grow text-white'>
      
      <header className='absolute top-5 right-5'>
        
        <div className='flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2'>
          <Image className='rounded-full w-10 h-10'
            alt=''
            src={Nicepic} />
          <h2>Username</h2>
          <ChevronDownIcon className='h-5 w-5' />
        </div>

      </header>
      <section className='flex items-end space-x-7 bg-gradient-to-b to-black from-green-300 h-80 text-white  w-full p-8'>

        {/* Playlist Pic */}
        <Image className='h-44 w-44 shadow-2xl' 
        src={Nicepic} 
        alt='' />

        <p>PLAYLIST</p>
        <h1 className='text-2xl md:text-3xl xl:text-5xl font-bold'>
          Playlist Name
        </h1>
      </section>

      <div>
        {/* SONG */}
      </div>
    </div>
  )
}

export default Center