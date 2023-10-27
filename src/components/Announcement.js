import React from 'react'
import Marquee from "react-fast-marquee";
import {RxDotFilled} from "react-icons/rx"

const Announcement = () => {
  return (
    <div className='fixed border-y-[2px] border-[#e96c32] w-[100%] h-6 z-50  sm:bottom-5 top-3 sm:top-auto bg-white flex justify-around items-center text-black backdrop-blur-md'>
  <Marquee>
    <div className="w-full text-base sm:text-lg flex justify-center items-center font-semibold mx-1 sm:mx-10">
      <div className="mx-1"><RxDotFilled/></div>
      <div>Tejas Got Featured</div>
    </div>
    <div className="w-full text-base sm:text-lg flex justify-center items-center font-semibold mx-1 sm:mx-10">
      <div className="mx-1"><RxDotFilled/></div>
      <div>Dhaivat Featured his music</div>
    </div>
  </Marquee>
</div>

  )
}

export default Announcement
