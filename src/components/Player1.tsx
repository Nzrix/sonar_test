import React, { useState, useRef, useEffect } from 'react';
import {
  PlayCircleIcon,
  PauseCircleIcon,
  ForwardIcon,
  BackwardIcon
} from '@heroicons/react/20/solid';



function Player({ data }: {
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

  // เมื่อ currentSongIndex เปลี่ยนแปลงให้โปร่งออกมาเล่นเพลงใหม่
  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    }
  }, [currentSongIndex]);

  return (
    <div className=' items-center justify-center'>
      {/* แสดงชื่อเพลง */}
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
  )
}

export default Player
