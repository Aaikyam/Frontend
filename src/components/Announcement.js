import React from 'react'
import Marquee from "react-fast-marquee";
import {RxDotFilled} from "react-icons/rx"

const Announcement = () => {
  return (
    <div className=' absolute border-y-[2px] border-[#e96c32] w-full h-6 z-50 bottom-5 bg-white flex justify-around items-center  text-black  backdrop-blur-md'>
    <Marquee>
    <div className=" w-full text-lg flex justify-center items-center font-semibold mx-10"><div className=" mx-1"><RxDotFilled/></div><div>Tejas Got Featured</div></div>
    <div className=" w-full text-lg flex justify-center items-center font-semibold mx-10"><div className=" mx-1"><RxDotFilled/></div><div>Dhaivat Featured his music</div></div>
    </Marquee>
  </div>
  )
}

export default Announcement
