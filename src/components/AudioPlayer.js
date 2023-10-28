import React,{ useState,useEffect, useRef } from 'react'
import {BsPlayCircle,BsPauseCircle} from "react-icons/bs"

const AudioPlayer = ({audioon,audioElement}) => {
    const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    audioRef.current.addEventListener('timeupdate', () => {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
      setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
    });
  }, []);
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className={`w-full z-50 fixed bottom-0  hover:bg-slate-950 ${!audioon?"opacity-60":"opacity-110"}`} >
    <div className=' flex justify-between items-center w-full  px-6 py-4'>
        <div className=' flex '>
          <button onClick={togglePlay} className=" hover:text-[#e96c32] text-white mx-2  rounded-md">
            {!isPlaying?<BsPlayCircle size={35}/>:<BsPauseCircle size={35}/>}
          </button>
          <div className='text-white mx-2 flex flex-col items-left'>
            <div className=' font-semibold'>{audioElement.title}</div>
            <div className=' text-sm'>{audioElement.artist}</div>
          </div>
          </div>
          
        
        <div className=" w-[40%]  px-10 flex flex-col justify-between">
        <div className="bg-gray-600 h-[0.125rem] rounded-full">
          <div
            className="bg-[#e96c32] h-[0.125rem] rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      </div>
      <audio className='hidden' ref={audioRef} controls>
        <source src={audioElement.music} type="audio/mp3" />
        
      </audio>
      </div>
  )
}

export default AudioPlayer
