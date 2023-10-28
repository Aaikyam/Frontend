import React, { useState, useEffect, useRef } from 'react';

const Demo = () => {
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
    <div className="bg-gray-900 h-screen flex flex-col justify-between">
      <div className="h-4/5">
        {/* Your main content here */}
      </div>
      <div className="h-1/5 bg-gray-800 p-4 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <button onClick={togglePlay} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md">
            Play
          </button>
          <div className="text-white">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
        <div className="bg-gray-600 h-3 rounded-full">
          <div
            className="bg-green-500 h-3 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <audio className='hidden' ref={audioRef} controls>
        <source src="https://aaikyam-music.s3.ap-south-1.amazonaws.com/music/1698493318587-Paisa-Hai-Toh%28PagalWorldl%29.mp3" type="audio/mp3" />
        
      </audio>
    </div>
  );
};

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

export default Demo;
