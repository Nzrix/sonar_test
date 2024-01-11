import React from 'react'
import Sidebar from '@/components/Sidebar'
import Nicepic from '@/image/Nicepic.jpg'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

import Link from 'next/link'
import namesong from '@/data/RecommandSong.json'
import detail from '@/pages/DynamicRouting/[playlist]'

function Homepage2() {
    const imgp = "/img"
    return (
        <main className='flex'>
            <Sidebar />
            <header className='absolute top-5 right-5'>
                <div className='flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2'>
                    <Image className='rounded-full w-10 h-10'
                        alt=''
                        src={Nicepic} />
                    <h2>USERNAME</h2>
                    <ChevronDownIcon className='h-5 w-5' />
                </div>
            </header>

            {/* {"/DynamicRouting/" + `${item.id}`} */}
            <section className='flex w-screen '>

                <div className='justify-start  pt-7 px-5 w-full bg-gradient-to-b to-black from-green-300 h-80'>
                    <div className='flex flex-col text-white'>
                        <h1 className='text-3xl font-bold'>Listen Now</h1>
                        <p>Top picks for you. Updated daily.</p>
                    </div>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 flex-col w-auto h-auto justify-items-center gap-y-3 p-5 gap-x-7 text-white'>
                        {namesong.map((item) => (
                            <Link href={"/DynamicRouting/" + `${item.id}`} className="backdrop-blur-sm bg-white/30  drop-shadow-lg rounded-lg h-auto w-full flex items-center p-2 mt-4 duration-300 cursor-pointer hover:scale-105">
                                <div className="relative w-[100px] h-[60px]">
                                    <Image
                                        className="rounded-lg"
                                        src={imgp + item.img}
                                        alt='img'
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="m-2 w-full">
                                    <div className="flex justify-between items-center">
                                        <p className="font-bold">{item.nameplaylist}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <p>
                        <audio src=""></audio>
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Homepage2