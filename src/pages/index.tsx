import React from 'react'
import Homepage2 from './Homepage2'
import Player from '@/components/Player1'


function Home() {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      <title>Music-web</title>
      <main className='flex'>
        <Homepage2 />
      </main>
      <div>
        {/* <Playbar/> */}
        {/* <Player/> */}
        
      </div>
    </div>
  );
}

export default Home;

