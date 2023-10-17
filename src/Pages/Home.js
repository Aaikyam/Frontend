import React from "react";
import video from "../assets/pexels_videos_2611250 (2160p).mp4";
import twitter from "../assets/twitter.png";
import insta from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import discord from "../assets/discord.png";

const Home = () => {
  return (
    <div className="relative w-screen h-screen">
      <video
        className="absolute top-0 left-0 z-0 object-cover w-full h-full"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 z-10 w-full h-full flex flex-col items-center justify-center">
        <div className="text-white font-Tilt text-5xl font-bold text-center my-4">
          AAI<span className=" text-[#e41f1f]">KYAM</span>
        </div>
        <div className=" w-[60%] my-4 flex justify-center items-center">
          <div className="  cursor-pointer w-16 h-16 mx-12">
            <img src={twitter} alt="" />
          </div>
          <div className="  cursor-pointer w-16 h-16 mx-12">
            <img src={insta} alt="" />
          </div>
          <div className="  cursor-pointer w-16 h-16 mx-12">
            <img src={facebook} alt="" />
          </div>
          <div className="  cursor-pointer w-16 h-16 mx-12">
            <img src={discord} alt="" />
          </div>
        </div>
      </div>
      {/* <audio className=" absolute top-0 left-0 z-10" autoPlay loop >
        <source
          src="https://aaikyam-music.s3.ap-south-1.amazonaws.com/test/1697551430548-test_music.mp3"
          type="audio/mpeg"
        />
      </audio> */}
      {/* <div><img src='https://aaikyam-music.s3.ap-south-1.amazonaws.com/thumbnail/1697563911510-1697556094615-pexels-pixabay-36717.jpg' alt=''/></div> */}
    </div>
  );
};

export default Home;
