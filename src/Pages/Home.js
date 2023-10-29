import React, { useState,useEffect, useRef } from "react";
import rock from "../assets/rock.png";
import FeaturePopup from "../components/FeaturedPopup";
import "../App.css";
import { FaFacebookSquare,FaGreaterThan,FaLessThan} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { RiTwitterXLine } from "react-icons/ri";
import {HiMailOpen} from "react-icons/hi"
import Socials from "../components/Socials";
import Announcement from "../components/Announcement";
import {FaDiscord} from "react-icons/fa"
import Loader from "../components/Loader";
import AudioPlayer from "../components/AudioPlayer";

const fetchDataFromApi = async () => {
  try {
    const response = await fetch("https://api.aaikyam.studio/get/user");
    const data = await response.json();
    return data.Items;
  } catch (error) {
    console.error("Error fetching data from API", error);
    return [];
  }
};

const Home = () => {
  const video =
    "https://aaikyam-music.s3.ap-south-1.amazonaws.com/socialsbg/_import_61b44313f40047.97328362+(1)+(1)+(1)+(1).mp4";

  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const emailInputRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [audioElement, setAudioElement] = useState({});
  const [audioon,setAudioOn]=useState(false)
  const [socialopen,setSocialopen]=useState(false)
  


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

  const handleaudio =()=>{
setAudioOn(true)
  }
  const handleaudioexit=()=>{
    setAudioOn(false)
  }

  useEffect(() => {
    const fetchDataAndPlayAudio = async () => {
      const data = await fetchDataFromApi();
      const itemtoPlay = data.find((item) => item._isFeatured === false);
      if (itemtoPlay && itemtoPlay.music) {
        setAudioElement(itemtoPlay);
        
      }
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    fetchDataAndPlayAudio();
  }, []);

  const links = [
    {
      id: 1,
      child: (
        <>
          <FaFacebookSquare size={30} />
        </>
      ),
      href: "https://www.facebook.com/aaikyam.music/",

      
    },
    {
      id: 2,
      child: (
        <>
          <GrInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/aaikyam_official/",

      
    },
    {
      id: 3,
      child: (
        <>
          <RiTwitterXLine size={30} />
        </>
      ),
      href: "https://twitter.com/officialaaikyam",

    },
    {
        id: 4,
        child: (
          <>
            <HiMailOpen size={30} />
          </>
        ),
        href: "mailto:contact@aaikyam.studio",
  
      },

  ];


  return (
    <div className=" relative"  >
      {loading ?(
        <Loader/>
      ):( 
      <div onMouseEnter={handleaudio} onMouseLeave={handleaudioexit} className=" w-screen h-screen relative">
        <div className={` fixed inset-0 bg-[#e96c32] backdrop-blur-md text-white z-50 top-0 left-0 md:hidden flex justify-center items-center ${!socialopen?"w-full":"w-10"} h-10 rounded-r-lg px-2`}>
        <ul className={` w-full ${!socialopen?"flex":"hidden"} flex-row  justify-between items-center`}>
    {links.map(({ id, child, href }) => (
      <li
        key={id}
        className={`flex justify-between items-center p-4 my-2 rounded-full ml-2 hover:ml-2 hover:scale-125 duration-300`}
      >
        <a
          href={href}
          className="flex justify-between items-center w-full text-white"
          target="_blank"
          rel="noreferrer"
        >
          {child}
        </a>
      </li>
    ))}
  </ul>
         {socialopen?<div onClick={()=>setSocialopen(false)} className="text-xl "><FaGreaterThan/></div>:<div onClick={()=>setSocialopen(true)} className="text-xl "><FaLessThan/></div>}
        </div>
  
      <div  className="relative bg-black  bg-cover bg-center w-screen h-screen sm:flex sm:justify-center sm:items-center lg:grid lg:grid-cols-2 px-12  sm:p-16">
<video          className="absolute opacity-30 top-0 left-0 z-0 object-cover transform scale-x-[-1] w-screen h-screen"
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
              className={`z-10 w-[40%] rounded-lg font-semibold text-white border bg-[#e96c32] text-center p-1 sm:p-2 ${
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
            className=" relative w-full 2xl:h-[70%] sm:h-full object-contain object-center"
            src={rock}
            alt=""
          />
          
        </div>
      </div>
      {showPopup && <FeaturePopup onClose={closePopup} email={email} />}
      <Announcement/>
      <Socials/>
      <AudioPlayer audioon={audioon} audioElement={audioElement} />
    </div>
      )}
    </div>

    

  );
}

export default Home;
