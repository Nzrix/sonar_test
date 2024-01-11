import {
    HomeIcon,
    MagnifyingGlassIcon,
    BuildingLibraryIcon
} from '@heroicons/react/20/solid';
import React, { useEffect, useState } from 'react'
import { HeartIcon } from '@heroicons/react/24/outline';
import name from '@/data/Spotify.json'
import Link from 'next/link';
import Homepage from '@/pages/Homepage';
import songname from '@/data/RecommandSong.json'

function Sidebar() {
    return (
        <div className='text-gray-500 p-5 text-xs lg:text-sm border-r border-gray-900 
        overflow-scroll scrollbar-hide h-screen sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex'>
            <div className='space-y-4'>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <HomeIcon className='h-7 w-7' />
                    <Link href="/">
                        Home
                    </Link>
                </button>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <MagnifyingGlassIcon className='h-7 w-7' />
                    <p>Search</p>
                </button>
                <hr className='border-t-[0.1px] border-gray-300 my-3 ' />

                <button className='flex items-center space-x-2 hover:text-white'>
                    <BuildingLibraryIcon className='h-7 w-7' />
                    <p>Your Library</p>
                </button>

                <button className='flex items-center space-x-2 hover:text-white'>
                    <HeartIcon className='h-7 w-7' />
                    <p>Like Songs</p>
                </button>
                <hr className='border-t-[0.1px] border-gray-300 my-3' />

                {/* Playlists */}
                {
                    songname.map((playlistname, index) => {
                        return (
                            <p className='cursor-pointer hover:text-white' key={index}>
                                {playlistname.nameplaylist}
                            </p>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Sidebar