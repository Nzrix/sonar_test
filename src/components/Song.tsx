import { GetServerSidePropsContext } from 'next';
import React, { useState, useRef, useEffect } from 'react';
import {
  PlayCircleIcon,
  PauseCircleIcon,
  ForwardIcon,
  BackwardIcon
} from '@heroicons/react/20/solid';

function Song(
  { data }: {
    data: {
      id: number,
      img: string,
      nameplaylist: string,
      listsongname: {
        name: string,
        path: string,
        imgsong: string
      }[]
    },

  }
) {
  const imgp = "/img"
  const songp = "/music"
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);


  const playPauseHandler = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };
  const nextSongHandler = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % data.listsongname.length);
  };

  const prevSongHandler = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + data.listsongname.length) % data.listsongname.length);
  };
  const handleCardClick = (index: number) => {
    if (index === currentSongIndex) {
      playPauseHandler(); // ถ้าคลิกที่การ์ดที่กำลังเล่น ให้ทำการเปิดหรือปิดการเล่น
    } else {
      setCurrentSongIndex(index);
      setIsPlaying(true); // ให้เล่นเพลงที่ถูกคลิก
    }
  };

  // เมื่อ currentSongIndex เปลี่ยนแปลงให้โปร่งออกมาเล่นเพลงใหม่
  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    }
  }, [currentSongIndex]);

  return (
    <main>
      {data.listsongname.map((item, index) => {
        return (
          <div className='grid grid-cols-2 text-gray-500 hover:bg-gray-900 cursor-pointer'>

            <div
              key={index}
              className='flex items-center space-x-4 py-4 px-5'
              onClick={() => handleCardClick(index)}
            >
              <p>{index + 1}</p>
              <img
                className='w-20 h-20'
                src={imgp + item.imgsong}
                alt=""
              />
              <div>
                <p className='w-36 lg:w-64 text-white truncate'>
                  {item.name}
                </p>
              </div>
            </div>




          </div>
        )
      })}
      <div>
        <div className='flex justify-center w-full'>
          <p>{data.listsongname[currentSongIndex].name}</p>
        </div>

        <div className='flex h-full items-center justify-center gap-10'>
          {/* ปุ่มก่อนหน้า */}
          <div className="text-neutral-400 hover:text-white cursor-pointer transition">
            <BackwardIcon
              onClick={prevSongHandler}
              className="flex items-center justify-center h-10 w-10  cursor-pointer"
            />
            Previous
          </div>

          {/* ปุ่มเล่น/หยุด */}
          <div className="text-neutral-400 hover:text-white cursor-pointer transition">
            <PlayCircleIcon
              onClick={playPauseHandler}
              className="flex items-center justify-center h-10 w-10  cursor-pointer"
            />
            {isPlaying ? 'Pause' : 'Play'}
          </div>

          {/* ปุ่มถัดไป */}
          <div className="text-neutral-400 hover:text-white cursor-pointer transition">
            <ForwardIcon
              onClick={nextSongHandler}
              className="flex items-center justify-center h-10 w-10  cursor-pointer"
            />
            Next
          </div>
        </div>

        <div>
          {/* ตัวเล่นเพลง */}
          <audio
            ref={audioRef}
            src={songp + data.listsongname[currentSongIndex].path}
            onEnded={nextSongHandler}
          ></audio>
        </div>
      </div>
    </main>

  )
}

export default Song