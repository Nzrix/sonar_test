import React, { useRef, useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Song from '@/components/Song'
import Nicepic from '@/image/Nicepic.jpg'
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Namesong from '@/data/RecommandSong.json'
import { GetServerSidePropsContext } from 'next';
import Player from '@/components/Player1'


export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    // console.log(context.query.playlist);
    const a = Namesong.find((item) => item.id == Number(context.query.playlist))
    return {
        props: {
            data: a,
        },
    };
};

function Playlist({ data }: {
    data: {
        id: number,
        img: string,
        nameplaylist: string,
        listsongname: {
            name: string,
            path: string,
            imgsong: string
        }[]
    }
}
) {
    const imgp = "/img"
    const sonp = "/music"


    return (
        <main className='flex'>
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


            <section className='flex-grow text-white  h-screen overflow-y-scroll scrollbar-hide'>
                <div className='flex items-end space-x-7 p-8 w-full  bg-gradient-to-b to-black from-orange-200 h-80 '>
                    {/* Image */}
                    <Image className='h-44 w-44 shadow-2xl '
                        src={imgp + data?.img || ''} alt='img_playlist'
                        // src={imgp + Namesong.find(item => item.id === 1)?.img || ''} alt='img'
                        width={500}
                        height={500}
                    />

                    {/* Playlist Name */}
                    <div>
                        <p>PLAYLIST</p>
                        <p className='text-2xl md:text-3xl xl:text-5xl font-bold'>
                            {data?.nameplaylist}
                        </p>
                    </div>
                </div>
                <Song
                    data={data}
                />
                {/* <Player 
                    data={data}
                /> */}
            </section >
        </main>
    )
}

export default Playlist
