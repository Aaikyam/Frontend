import React, { useState,useEffect, useRef } from "react";
import rock from "../assets/rock.png";
import FeaturePopup from "../components/FeaturedPopup";
import "../App.css";
import {BsShareFill} from "react-icons/bs"
import { FaFacebookSquare} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { RiTwitterXLine } from "react-icons/ri";
import {TfiEmail} from "react-icons/tfi"
import Socials from "../components/Socials";
import {FaDiscord} from "react-icons/fa"
import Loader from "../components/Loader";
import AudioPlayerSection from "../components/AudioPlayerSection";
import MusicSection from "../components/MusicSection";
import { motion } from "framer-motion";


const Home = () => {
  const [active,setActive]=useState(false)
  const[activeMusic,setActiveMusic]=useState({
    "title":"",
    "artist":"",
    "music":"",
    "thumbnail":""
  })
  const [music,setMusic]=useState([])
  const fetchDataFromApi = async () => {
    try {
      const response = await fetch("https://api.aaikyam.studio/get/user");
      const data = await response.json();
      setMusic(data.Items);
      return data.Items;
    } catch (error) {
      console.error("Error fetching data from API", error);
    }
  };
  
  const video =
    "https://aaikyam-music.s3.ap-south-1.amazonaws.com/socialsbg/_import_61b44313f40047.97328362+(1)+(1)+(1)+(1).mp4";

  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const emailInputRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [audioElement, setAudioElement] = useState({});
  const [socialopen,setSocialopen]=useState(true)
  


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

  

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    const fetchDataAndPlayAudio = async () => {
      const data = await fetchDataFromApi();
      const itemtoPlay = data.find((item) => item._isFeatured === false);
      if (itemtoPlay && itemtoPlay.music) {

        try{
        
      const resp = await fetch(`https://api.aaikyam.studio/update/playStatus/${itemtoPlay.content_id}`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                },
              });
              // console.log(resp)
            }catch(err){
              console.log(err)
            }
            
            
       setTimeout(async() => {
            const response = await fetch(`https://api.aaikyam.studio/update/featured/${itemtoPlay.content_id}`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                },
              });
              // console.log(response)
        
       }, 10800000);
       
        setAudioElement(itemtoPlay);
      }
     
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
            <TfiEmail size={32} />
          </>
        ),
        href: "mailto:contact@aaikyam.studio",
  
      },

  ];
  const handleanimate = (e)=> {
    e.preventDefault();
  console.log("clicked")
    const musicSection = document.getElementById('musicSection');
    if (musicSection) {
      musicSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className=" relative"  >
      {loading ?(
        <Loader/>
      ):( 
        <div className=" w-screen h-full bg-black">
      <div  className=" w-screen h-screen relative">
        <div className={` absolute   backdrop-blur-md text-white z-50 top-[3%] right-3 md:hidden flex justify-center items-center ${!socialopen?"w-[95%] rounded-r-lg":"w-10 rounded-full"} h-10  px-2`}>
        <ul className={` w-full ${!socialopen?"flex":"hidden"} flex-row  justify-between items-center`}>
    {links.map(({ id, child, href }) => (
      <li
        key={id}
        className={`flex justify-between items-center p-4 my-2 rounded-full mx-2 hover:ml-2 hover:scale-125 duration-300`}
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
         <div onClick={()=>setSocialopen(!socialopen)} className="text-xl "><BsShareFill/></div>
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
          <div  className=" w-[70%] my-10 mx-auto flex flex-col items-center">
            <div className="text-white cursor-default animate-neon SAMAN__ text-4xl sm:text-7xl text-center font-extrabold">
              AAIKYAM
            </div>
          </div>
          <div className=" w-full font-Raleway  cursor-default sm:w-[70%] z-10 text-white text-center">
Experience Aaikyam: Where Music Unites and cultures Resonates ! Join our vibrant creator community, share your talent in 'Get Featured,' and watch your art flourish. Stay tuned for monetization tools to turn your passion into an asset. Connect on Discord and social platforms for a collaborative journey! </div>

          {/* <div className=" w-[60%] h-24 mx-auto bg-black my-10"></div> */}
          <button onClick={()=>window.open("https://discord.gg/cH4Ee6ykrM", "_blank")} className=" w-[45%] sm:w-[40%] md:w-[30%] flex justify-center items-center p-2 my-8 border-[1px] rounded-lg bg-white text-[#e96c32]">
            <div className="mx-1 text-sm sm:text-base font-semibold ">
              JOIN DISCORD
            </div>
            <div className=" mx-1"><FaDiscord size={30}/></div>

          </button>
          <div className="z-50 my-4 bg-white w-full sm:w-[60%] lg:w-[50%] flex justify-center items-center rounded-lg  ">
            <input
              ref={emailInputRef}
              className="w-[60%] z-50 bg-white p-2 rounded-l-lg focus:outline-none"
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
        <div className=" hidden  z-0   w-full sm:h-[90vh] 2xl:h-[85vh] lg:flex lg:justify-center  lg:items-center">
          <img
            className=" relative w-full 2xl:h-[70%] sm:h-full object-contain object-center"
            src={rock}
            alt=""
          />
          
        </div>
       
      </div>
      {showPopup && <FeaturePopup onClose={closePopup} email={email} />}
      <div   className=' absolute xs:bottom-6 bottom-20 w-screen   flex justify-center items-center z-20 md:z-0'>
        <a onClick={handleanimate}  href='#musicSection'>
          <div  className=' w-[35px] h-[64px] border-4 flex justify-center items-start rounded-3xl border-slate-400 p-2'>
            <motion.dev 
            
            animate={{
              y:[0,24,0]
              }} 
              transition={{
                duration:2, 
                repeat:Infinity, 
                repeatType:'loop'}} 
              className='w-3 h-3 rounded-full bg-slate-400 mb-1'/>
          </div>
        </a>
      </div>
      {/* <Announcement/> */}
      <Socials/>
      {(activeMusic || audioElement)&&<AudioPlayerSection  audioElement={audioElement} activeMusic={activeMusic} active={active} setActive={setActive}  />}
    </div>
    {music &&<MusicSection music={music} setActiveMusic={setActiveMusic} activeMusic={activeMusic} active={active} setActive={setActive} />}
    </div>
      )}
    </div>

    

  );
}

export default Home;
