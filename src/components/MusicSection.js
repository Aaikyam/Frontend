import React,{useState} from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { MdOutlinePlayCircleFilled,MdPauseCircle } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";


const MusicSection = ({ music,activeMusic, setActiveMusic,active,setActive}) => {
  

  const handleMusicClick = (musics) => {
    
      setActiveMusic({
        title: musics.title,
        artist: musics.artist,
        music: musics.music,
        thumbnail: musics.thumbnail,
      });
      setActive(true)

    }
    // console.log(active)
  
  return (
    <>
      <motion.div id="musicSection"  variants={textVariant()} className=" px-12 md:px-20">
        <h2  className={`text-[40px] font-Poppins font-bold text-white`}>
          Latest Music.
        </h2>
      </motion.div>
      <div className=" w-full mt-16 pb-20 flex flex-wrap items-center gap-10 px-20">
        {music.map((musics, index) => (
          <motion.div
            key={index}
            variants={fadeIn("right", "spring", 0.5 * 1, 0.75)}
            className="md:w-[280px]  w-full h-[350px] rounded-lg relative overflow-hidden transition-transform duration-300 transform-gpu "
          >
            <div className={` relative text-white w-full h-[100%] bg-cover bg-center bg-no-repeat rounded-lg py-4 px-6 flex flex-col justify-end ${activeMusic.music === musics.music && active===true ?"opacity-70":"opacity-100"}  overflow-hidden transition-transform duration-300 transform-gpu hover:scale-105 hover:-z-10 hover:opacity-70 `} style={{
    backgroundImage: `url(${musics.thumbnail})`,
    transition: 'opacity 0.3s ease-in-out',
  }}>
    {musics.instagram?<div
                onClick={() => {
                  window.open(
                    `https://www.instagram.com/${musics?.instagram}/`
                  );
                }}
                className=" absolute cursor-pointer text-white top-3 right-3  transition-opacity duration-300"
                style={{ zIndex: 1 }}
              >
                <GrInstagram size={30} />
              </div>:<div
                onClick={() => {
                  window.open(
                    `https://www.facebook.com/${musics?.facebook}/`
                  );
                }}
                className=" absolute cursor-pointer text-white top-3 right-3  transition-opacity duration-300"
                style={{ zIndex: 1 }}
              >
                <GrInstagram size={30} />
              </div>}
              <div onClick={() => handleMusicClick(musics)}>
            {activeMusic.music === musics.music && active===true ? (
              
              <div className=" hidden"></div>
            ) : (
              
              < MdOutlinePlayCircleFilled  className="cursor-pointer" size={70} />
            )}
          </div>
              {musics.title.slice(19)?<div style={{ zIndex: 1 }} className=" my-1 text-[32px] font-bold">
               {musics.title.slice(0,18)}...
              </div>:<div style={{ zIndex: 1 }} className=" my-1 text-[32px] font-bold">
               {musics.title.slice(0,18)}
              </div>}
              <div style={{ zIndex: 1 }} className=" my-1 text-[20px] opacity-80">
                {musics.artist}
              </div>
            </div>
            
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default MusicSection;
