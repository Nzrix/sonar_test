import React from 'react'
import Sidebar from '@/components/Sidebar'
import Song from '@/components/Song'
import Nicepic from '@/image/Nicepic.jpg'
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Namesong from '@/data/RecommandSong.json'


function Playlist() {

    // const urlimg = "/Album.jpg"

    return (
        <div className='flex'>
            <Sidebar />

            <header className='absolute top-5 right-5'>

                <div className='flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2'>
                    <Image className='rounded-full w-10 h-10'
                        alt=''
                        src={Nicepic} />
                    <h2>Username</h2>
                    <ChevronDownIcon className='h-5 w-5' />
                </div>

            </header>
            
            <div className='flex-grow text-white  h-screen overflow-y-scroll scrollbar-hide'>

                <section className='flex items-end space-x-7 bg-gradient-to-b to-black from-orange-200 h-80 text-white  w-full p-8'>

                    {/* Playlist Pic */}
                    <Image className='h-44 w-44 shadow-2xl '
                        src={Namesong[0].img} alt='img'
                        width={500}
                        height={500}
                    />

                    {/* Playlist Name */}
                    <div>
                        <p>PLAYLIST</p>
                        <h1 className='text-2xl md:text-3xl xl:text-5xl font-bold'>
                            {Namesong[0].nameplaylist}
                        </h1>
                    </div>
                </section>

                {/* Song */}
                <div>
                    <Song />
                </div>
            </div>

        </div>
    )
}

export default Playlist
