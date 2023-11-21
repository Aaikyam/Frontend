import React from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const AudioPlayerSection = ({ activeMusic, audioElement}) => {

  return (
    <div className={`w-screen z-40 fixed bottom-0  bg-slate-950 opacity-110`} >
    <div className=' flex justify-between items-center w-full'>     
        <div  className=" w-[100%] py-2 flex flex-col justify-between">
        {/* <audio ref={audioRef} src={activeMusic.music ? activeMusic.music : audioElement.music}></audio> */}
          
            <AudioPlayer
              src={activeMusic.music ? activeMusic.music : audioElement.music}
              style={{background: 'transparent'}}
              autoPlay={false}             
              layout="horizontal-reverse"
              showJumpControls={false}
              customControlsSection={
                [
                  
                  RHAP_UI.MAIN_CONTROLS,
                  <div className=' flex w-[100%] justify-start items-center '>
          <div className='w-12 h-12 bg-cover bg-center mx-1 rounded-md' style={{
    backgroundImage: `url(${activeMusic.music?activeMusic.thumbnail:audioElement.thumbnail})`,
  }}></div>
          <div className='text-white mx-2 flex flex-col justify-between items-left'>
            <div className=' font-semibold text-sm md:text-base'>{activeMusic.title?activeMusic.title.slice(0,10):audioElement.title.slice(0,10)}</div>
            <div className=' text-xs md:text-sm'>{activeMusic.artist?activeMusic.artist.slice(0,15):audioElement.artist.slice(0,15)}</div>
          </div>
          </div>,

                ]
              }
              customProgressBarSection={
                [
                  // RHAP_UI.CURRENT_TIME,
                  RHAP_UI.PROGRESS_BAR,
                  // RHAP_UI.DURATION
                ]
              }
            />
          
        </div>
        <style>
        {`
          .rhap_main-controls-button {
            color: white !important;
          }
          .rhap_progress-filled {
            background-color: #e96c32 !important;
            height: '1px'
          }
          .rhap_time {
            color: white !important;
          }
        `}
      </style>
      </div>
      </div>
    
  );
};

export default AudioPlayerSection;
