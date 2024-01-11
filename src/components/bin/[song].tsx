import React from 'react'
import psong from '@/data/RecommandSong.json'
import { GetServerSidePropsContext } from 'next';


export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    console.log(context.query.song);
    const a = psong.find((item) => item.id == Number(context.query.song))
    // console.log(a);
    return {
        props: {
            data: a,
        },
    };
};


function song({ data }: {
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
}) {

    const imgp = "/img"
    const songp = "/music"

    return (
        <div>
            <h1>{data.nameplaylist}</h1>
            <ul>
                {data.listsongname.map((song, index) => (
                    <li key={index}>
                        <p>{song.name}</p>
                        <img src={imgp + song.imgsong} alt={`img_song_${index}`} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default song
