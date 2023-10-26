import React, { useState, useRef } from "react";
import rock from "../assets/rock.png";
import FeaturePopup from "../components/FeaturedPopup";
import '../App.css'

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
    <>
      <div className="relative bg-black  bg-cover bg-center w-screen h-screen sm:flex sm:justify-center sm:items-center lg:grid lg:grid-cols-2 p-12  sm:p-16">
        <video
          className="absolute opacity-30 top-0 left-0 z-0 object-cover w-screen h-screen"
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
        </video>

        <div className=" relative z-10 w-full h-[90vh] flex flex-col items-center justify-center ">
          <div className=" w-[70%] my-10 mx-auto flex flex-col items-center">
            <div className=" text-white font-Orbitron text-6xl lg:text-5xl text-center font-extrabold ">
              AAIKYAM
            </div>
          </div>
          <div className=" w-full sm:w-[70%] z-10 text-white text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            bibendum, justo vel placerat sollicitudin, nibh lectus elementum
            risus, a lacinia felis ligula sit amet turpis. Mauris nibh purus,
            porttitor eget finibus, congue quis turpis.
          </div>

          {/* <div className=" w-[60%] h-24 mx-auto bg-black my-10"></div> */}
          <div className=" w-full flex justify-center items-center my-10">
            <button className="tubelight">
              {/* <div className=" w-full h-full mx-1">
                <img className=" w-full h-full" src={discord} alt="" />
              </div> */}
              JOIN OUR DISCORD
              {/* <div className=" text-white flex flex-col items-center m-1 p-2 rounded-lg ">
                <div className=" font-Salsa text-xl">JOIN US ON</div>
                <div className=" font-Salsa text-xl">DISCORD</div>
              </div> */}
            </button>
          </div>
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
        <div className=" hidden  z-10   w-full sm:h-[90vh] lg:flex lg:justify-center  lg:items-center">
          <img className=" w-full 2xl:h-[70%] sm:h-full object-contain object-center" src={rock} alt="" />
        </div>
      </div>
      {showPopup && <FeaturePopup onClose={closePopup} email={email} />}
    </>
  );
};

export default Home;
