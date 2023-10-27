import React, { useState, useRef } from "react";
import rock from "../assets/rock.png";
import FeaturePopup from "../components/FeaturedPopup";
import "../App.css";
import Socials from "../components/Socials";
import Announcement from "../components/Announcement";
import {FaDiscord} from "react-icons/fa"


const Home = () => {
  const video =
    "https://aaikyam-music.s3.ap-south-1.amazonaws.com/socialsbg/_import_61b44313f40047.97328362.mp4";

  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const emailInputRef = useRef(null);

  const openPopup = () => {
    if (emailInputRef.current.checkValidity()) {
      setShowPopup(true);
    } else {
      alert("Email is required");
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setEmail("");
  };

  return (
    <div className=" relative">
    
      <div className="relative bg-black  bg-cover bg-center w-screen h-screen sm:flex sm:justify-center sm:items-center lg:grid lg:grid-cols-2 px-12  sm:p-16">

        <video
          className="absolute opacity-30 top-0 left-0 z-0 object-cover w-screen h-screen"
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
        </video>
       

        <div className=" relative z-10 w-full h-[90vh] 2xl:h-[85vh] flex flex-col items-center justify-center ">
          <div className=" w-[70%] my-10 mx-auto flex flex-col items-center">
            <div className="text-white animate-neon SAMAN__ text-7xl text-center font-extrabold">
              AAIKYAM
            </div>
          </div>
          <div className=" w-full sm:w-[70%] z-10 text-white text-center">
Experience Aaikyam: Where Music Unites and cultures Resonates ! Join our vibrant creator community, share your talent in 'Get Featured,' and watch your art flourish. Stay tuned for monetization tools to turn your passion into an asset. Connect on Discord and social platforms for a collaborative journey! </div>

          {/* <div className=" w-[60%] h-24 mx-auto bg-black my-10"></div> */}
          <button onClick={()=>window.open("https://discord.gg/etNkeftteT", "_blank")} className=" w-[45%] sm:w-[40%] md:w-[30%] flex justify-center items-center p-2 my-8 border-[1px] rounded-lg bg-white text-[#e96c32]">
            <div className="mx-1 text-sm sm:text-base font-semibold ">
              JOIN DISCORD
            </div>
            <div className=" mx-1"><FaDiscord size={30}/></div>

          </button>
          <div className="z-10 my-4 bg-white w-full sm:w-[60%] lg:w-[50%] flex justify-center items-center rounded-lg  ">
            <input
              ref={emailInputRef}
              className="w-[60%] bg-white p-2 rounded-l-lg focus:outline-none"
              type="email"
              name="email"
              required
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={openPopup}
              className={`z-10 w-[40%] rounded-lg font-semibold text-white border bg-[#e96c32] text-center p-2 ${
                email ? "" : "cursor-not-allowed"
              }`}
              disabled={!email}
            >
              Get Featured
            </button>
          </div>
        </div>
        <div className=" hidden  z-10   w-full sm:h-[90vh] 2xl:h-[85vh] lg:flex lg:justify-center  lg:items-center">
          <img
            className=" w-full 2xl:h-[70%] sm:h-full object-contain object-center"
            src={rock}
            alt=""
          />
        </div>
      </div>
      {showPopup && <FeaturePopup onClose={closePopup} email={email} />}
      <Announcement/>
      <Socials/>
    </div>
  );
};

export default Home;
