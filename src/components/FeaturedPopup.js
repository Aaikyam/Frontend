import React, { useState} from "react";
import { MdClose,MdDelete } from "react-icons/md";
import {TiTick} from "react-icons/ti"

const FeaturePopup = ({ onClose,email }) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [username, setUserName] = useState("");
  const [musicfile, setMusicfile] = useState(null);
  const [thumbnailfile, sethTumbnailfile] = useState(null);
  const [thumbnailuploading, setThumbnailUploading] = useState(false);
  const [thumbnailuploadDone, setThumbnailUploadDone] = useState(false);
  const [thumbsubmitDone, setThumbSubmitDone] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("instagram");
  const [uploading, setUploading] = useState(false);
  const [uploadDone, setUploadDone] = useState(false); // Added uploading state
  const [submitDone, setSubmitDone] = useState(false);
  const [fileUrl, setFileUrl] = useState(""); // Added state to store the received URL
  const [thumbnailfileUrl, setThumbnailFileUrl] = useState("");
  const options = ["instagram", "twitter", "facebook"];

  const UploadDoneIn=() => {
    
      setTimeout(() => {
        setSubmitDone(false);
        onClose();
      }, 1000);

  };
  const handleThumbClearFile = () => {
    sethTumbnailfile(null);
  };
  const ThumbUploadDoneIn=() => {
    
    setTimeout(() => {
      setThumbSubmitDone(false);
    }, 1000);

};
const handleClearFile = () => {
  setMusicfile(null);
};

console.log("thumb",thumbnailfileUrl)

  const handleFormSubmit =  (e) => {
    e.preventDefault();
    

      if(fileUrl && thumbnailfileUrl){
      const userObject = {
        [selected]: username,
        artist,
        email: email,
        title:title,
        music: fileUrl,
        thumbnail: thumbnailfileUrl
      };

      console.log(userObject)
      // Make HTTP request to server-side endpoint
          fetch("https://api.aaikyam.studio/addMusic", {
            method: "POST",
            body: JSON.stringify(userObject),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((data) => {setSubmitDone(true); ThumbUploadDoneIn(); UploadDoneIn(); console.log(data)})
            .catch((error) => console.error(error));
          }
          else{
            alert("Please Upload Your Files");
          }
    
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setMusicfile(file);
  };
  const handleThumbFileChange = (e) => {
    const file = e.target.files[0];
    sethTumbnailfile(file);
  };

  const handleUpload = () => {
    if (musicfile) {
      setUploading(true);
      const formData = new FormData();
      formData.append("file", musicfile);

      fetch("https://api.aaikyam.studio/upload/music", {
        method: "POST",
        body: formData,
      })
      .then((response) => {
        if (response.ok) {
          return response.json(); // This is a promise
        } else {
          throw new Error("Network response was not ok.");
        }
      })
        .then((data) => {
          setFileUrl(data.music_url);
          setUploading(false);
          setUploadDone(true)
        })
        .catch((error) => {
          console.error("Error:", error);
          setUploading(false);
        });
    }
  };
  const handleThumbUpload = () => {
    if (thumbnailfile) {
      setThumbnailUploading(true);
      const formData = new FormData();
      formData.append("file", thumbnailfile);

      fetch("https://api.aaikyam.studio/upload/thumbnail", {
        method: "POST",
        body: formData,
      })
      .then((response) => {
        if (response.ok) {
          return response.json(); // This is a promise
        } else {
          throw new Error("Network response was not ok.");
        }
      })
        .then((data) => {
          setThumbnailFileUrl(data.thumbnail_url);
          setThumbnailUploading(false);
          setThumbnailUploadDone(true)
        })
        .catch((error) => {
          console.error("Error:", error);
          setThumbnailUploading(false);
        });
    }
  };
  

  return (
    <>{
      submitDone?
      <div className="fixed inset-0  z-50 bg-opacity-70 bg-gray-900 backdrop-blur-md w-screen h-screen flex justify-center items-center">
        <div className="w-56 h-56 bg-green-500 rounded-full flex justify-center items-center ">
          <TiTick size={150}/>
        </div>
      </div>
      
      :
    
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-70 bg-gray-900 backdrop-blur-md">
      <div className="bg-gray-800 text-white w-[90%] lg:w-1/3 p-8 rounded-lg shadow-lg">
        <div className="text-2xl text-center font-semibold mb-4">
          Get Your Music Featured On Our Website
        </div>
        <form action="/" onSubmit={handleFormSubmit} className="text-gray-400" >
          <div
            className={` relative mb-4 w-full bg-white text-black border ${
              !isActive ? "rounded-lg" : "rounded-t-lg"
            }  `}
          >
            <div
              onClick={() => setIsActive(!isActive)}
              className=" w-full cursor-pointer flex p-2"
            >
              <div>{selected}</div>
            </div>
            {isActive && (
              <div className="  absolute w-full flex flex-col">
                {options.map((item, id) => {
                  return (
                    <div
                      key={id}
                      onClick={() => {
                        setSelected(item);
                        setIsActive(false);
                      }}
                      className={`hover:bg-slate-100 cursor-pointer bg-white border-b-[1px] p-2  ${
                        id === 2 ? "rounded-b-lg" : ""
                      } transition`}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              placeholder="Social media Username/Id"
              className="w-full p-2 border rounded-lg text-black focus:outline-none"
              value={username}
              required
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="artist"
              placeholder="Artist"
              className="w-full p-2 border rounded-lg text-black focus:outline-none"
              value={artist}
              required
              onChange={(e) => setArtist(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="w-full p-2 border rounded-lg text-black focus:outline-none"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className=" flex justify-between items-center shadow-lg mb-4 w-full p-3 bg-white rounded-lg">
      {!thumbnailfile ? (
        <div>Thumbnail</div>
      ) : (
        <span className={`mx-2 text-xs ${!thumbnailuploadDone?"text-red-500":"text-green-500"}`}>{thumbnailfile.name}</span>
      )}
      <input
        className="hidden"
        id="fileInpt"
        placeholder=""
        required
        // key={musicfile ? musicfile.name : 'default'}
        name="thumbnailfile"
        onChange={handleThumbFileChange}
        type="file"
      />
     
      {!thumbnailfile ? (
        <label
          htmlFor="fileInpt"
          className="px-3 py-2 rounded-full border-[1px] border-black flex justify-between items-center cursor-pointer"
        >
          <div className="mx-1">Select File</div>
          <div className="mx-1">
            <img src="" alt="" />
          </div>
        </label>
      ) : (
        thumbnailuploading ? (
          <button className=" text-black text-lg animate-spin" disabled>...</button>
        ) : !thumbnailuploadDone ?(
          <div className="flex">
                    <button
                      className="px-3 py-2 text-black rounded-full border-[1px] border-black flex justify-between items-center cursor-pointer"
                      onClick={handleThumbUpload}
                    >
                      Upload
                    </button>
                    <button
                      className="text-red-500 ml-2"
                      onClick={handleThumbClearFile}
                    >
                      <MdDelete/>
                    </button>
                  </div>        ) : (<button className=" text-green-500" onClick={handleThumbUpload}><TiTick size={25}/></button>)
      )}
    </div>
          <div className=" flex justify-between items-center shadow-lg mb-4 w-full p-3 bg-white rounded-lg">
      {!musicfile ? (
        <div>Music File</div>
      ) : (
        <span className={`mx-2 text-xs ${!uploadDone?"text-red-500":"text-green-500"}`}>{musicfile.name}</span>
      )}
      <input
        className="hidden"
        id="fileInput"
        placeholder=""
        required
        // key={musicfile ? musicfile.name : 'default'}
        name="musicfile"
        onChange={handleFileChange}
        type="file"
      />
     
      {!musicfile ? (
        <label
          htmlFor="fileInput"
          className="px-3 py-2 rounded-full border-[1px] border-black flex justify-between items-center cursor-pointer"
        >
          <div className="mx-1">Select File</div>
          <div className="mx-1">
            <img src="" alt="" />
          </div>
        </label>
      ) : (
        uploading ? (
          <button className=" text-black text-lg animate-spin" disabled>...</button>
        ) : !uploadDone ?(
          <div className="flex">
                    <button
                      className="px-3 py-2 text-black rounded-full border-[1px] border-black flex justify-between items-center cursor-pointer"
                      onClick={handleUpload}
                    >
                      Upload
                    </button>
                    <button
                      className="text-red-500 ml-2"
                      onClick={handleClearFile}
                    >
                      <MdDelete/>
                    </button>
                  </div>        ) : (<button className=" text-green-500" onClick={handleUpload}><TiTick size={25}/></button>)
      )}
    </div>

          <div className=" text-center w-full">
            <button
              type="submit"
              className=" w-1/2  bg-[#e96c32] text-center text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>
            </div>
          
        </form>
        <button
          onClick={onClose}
          className="absolute top-6 right-6 lg:top-20 lg:right-20 text-gray-600 hover:text-gray-800"
        >
          <MdClose size={40} />
        </button>
      </div>
    </div>}
    </>
  );
};

export default FeaturePopup;
