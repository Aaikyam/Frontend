import React from "react";
import { FaFacebookSquare} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { RiTwitterXLine } from "react-icons/ri";
import {HiMailOpen} from "react-icons/hi"
import "../App.css"

const Socials = () => {
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
    <div className=" w-full md:w-12 z-50 hidden md:flex md:flex-col justify-center items-center top-[3%]   md:top-[30%] md:right-5 fixed">
       
  <ul className=" w-full flex flex-row md:flex-col justify-center items-center ">
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
</div>

  );
};

export default Socials;