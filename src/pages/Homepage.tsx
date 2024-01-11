import React from 'react'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import Album from '@/image/Album.jpg'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Nicepic from '@/image/Nicepic.jpg'
import Boompic from '@/image/Pictoohard.jpg'

import Link from 'next/link'

function Homepage() {
    return (
        <div className='flex text-white'>
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
            
            <section className='flex items-end space-x-7 bg-gradient-to-b to-black from-green-300 h-80 text-white  w-screen'>
                <div className="m-5 ">

                    <div className='flex'>
                        <p className="font-bold text-3xl ">Good afternoon</p>
                    </div>

                    <div className='flex'>
                        <Link href="Playlist">
                            <div className='flex'>
                                <div className="backdrop-blur-sm bg-white/30  drop-shadow-lg rounded-lg flex items-center 
                                                p-3 mt-4 duration-300 cursor-pointer hover:scale-105 mx-5 h-[70px] w-[270px]">
                                    <div className="relative w-[100px] h-[60px]">
                                        <Image
                                            className="rounded-lg"
                                            src={Album}
                                            alt=''
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                    <div className="m-2 w-full">
                                        <div className="flex justify-between items-center">
                                            <p className="font-bold">กูเป็นโค้ชก็ดีอยู่แล้ว</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <div className='flex'>
                            <div className="backdrop-blur-sm bg-white/30  drop-shadow-lg rounded-lg h-[70px] w-[270px]
                                        flex items-center p-3 mt-4 duration-300 cursor-pointer hover:scale-105 mx-5 ">
                                <div className="relative w-[100px] h-[60px]">
                                    <Image
                                        className="rounded-lg"
                                        src={Boompic}
                                        alt=''
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="m-2 w-full">
                                    <div className="flex justify-between items-center">
                                        <p className="font-bold"></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex'>
                            <div className="backdrop-blur-sm bg-white/30  drop-shadow-lg rounded-lg h-[70px] w-[270px]
                                        flex items-center p-3 mt-4 duration-300 cursor-pointer hover:scale-105 mx-5">
                                <div className="relative w-[100px] h-[60px]">
                                    <Image
                                        className="rounded-lg"
                                        src={Album}
                                        alt=''
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="m-2 w-full">
                                    <div className="flex justify-between items-center">
                                        <p className="font-bold">กูเป็นโค้ชก็ดีอยู่แล้ว</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className='flex'>
                        <div className="backdrop-blur-sm bg-white/30  drop-shadow-lg rounded-lg h-[70px] w-[270px]
                                        flex items-center p-3 mt-4 duration-300 cursor-pointer hover:scale-105 mx-5">
                            <div className="relative w-[100px] h-[60px]">
                                <Image
                                    className="rounded-lg"
                                    src={Album}
                                    alt=''
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="m-2 w-full">
                                <div className="flex justify-between items-center">
                                    <p className="font-bold">กูเป็นโค้ชก็ดีอยู่แล้ว</p>
                                </div>
                            </div>
                        </div>
                        <div className="backdrop-blur-sm bg-white/30  drop-shadow-lg rounded-lg h-[70px] w-[270px]
                                        flex items-center p-3 mt-4 duration-300 cursor-pointer hover:scale-105 mx-5">
                            <div className="relative w-[100px] h-[60px]">
                                <Image
                                    className="rounded-lg"
                                    src={Album}
                                    alt=''
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="m-2 w-full">
                                <div className="flex justify-between items-center">
                                    <p className="font-bold">กูเป็นโค้ชก็ดีอยู่แล้ว</p>
                                </div>
                            </div>
                        </div>
                        <div className="backdrop-blur-sm bg-white/30  drop-shadow-lg rounded-lg h-[70px] w-[270px]
                                        flex items-center p-3 mt-4 duration-300 cursor-pointer hover:scale-105 mx-5">
                            <div className="relative w-[100px] h-[60px]">
                                <Image
                                    className="rounded-lg"
                                    src={Album}
                                    alt=''
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="m-2 w-full">
                                <div className="flex justify-between items-center">
                                    <p className="font-bold">กูเป็นโค้ชก็ดีอยู่แล้ว</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <div>
                {/* SONG */}
            </div>

        </div>




    )
}

export default Homepage
