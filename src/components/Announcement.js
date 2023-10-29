import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import { RxDotFilled } from 'react-icons/rx';

const fetchDataFromApi = async () => {
  try {
    const response = await fetch('https://api.aaikyam.studio/get/user');
    const data = await response.json();
    return data.Items;
  } catch (error) {
    console.error('Error fetching data from API', error);
    return [];
  }
};

const Announcement = () => {
  const [announcementData, setAnnouncementData] = useState([]);

  useEffect(() => {
    fetchDataFromApi().then((data) => {
      setAnnouncementData(data);
    });
  }, []);

  return (
    <div className="fixed border-y-2 border-[#e96c32] w-full h-6 z-30 sm:top-5 top-3  bg-white flex justify-around items-center text-black backdrop-blur-md">
      <Marquee>
        {announcementData.map((item, index) => (
          <div
            key={index}
            className={`w-full text-base sm:text-lg flex justify-center items-center font-semibold mx-1 sm:mx-10 ${
              item._isFeatured ? 'text-green-500' : 'text-blue-500'
            }`}
            style={{ color: 'black' }}
          >
            <div className="mx-1">
              <RxDotFilled />
            </div>
            <div>
              {item._isPlaying
                ? `Current Feature: ${
                    item.instagram
                      ? item.instagram
                      : item.twitter
                      ? item.twitter
                      : item.facebook
                      ? item.facebook
                      : item.title
                  }`
                : item.instagram
                ? item._isFeatured
                  ? `Featured: ${item.instagram}`
                  : `Upcoming Feature: ${item.instagram}`
                : item.twitter
                ? item._isFeatured
                  ? `Featured: ${item.twitter}`
                  : `Upcoming Feature: ${item.twitter}`
                : item.facebook
                ? item._isFeatured
                  ? `Featured: ${item.facebook}`
                  : `Upcoming Feature: ${item.facebook}`
                : item._isFeatured
                ? `Featured: ${item.title}`
                : `Upcoming Feature: ${item.title}`}
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Announcement;
