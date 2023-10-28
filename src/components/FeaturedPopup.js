import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const FeaturePopup = ({ onClose,email }) => {
  const [title, setTitle] = useState("");
  const [username, setUserName] = useState("");
  const [musicfile, setMusicfile] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("Social Media");
  const [uploading, setUploading] = useState(false);
  const [uploadDone, setUploadDone] = useState(false); // Added uploading state
  const [fileUrl, setFileUrl] = useState(""); // Added state to store the received URL
  const options = ["instagram", "twitter", "facebook"];
  

  const handleFormSubmit =  (e) => {
    e.preventDefault();
    
    // You can now use the fileUrl state to send the URL to the server
    
      // Perform the POST request with the fileUrl
      const userObject = {
        [selected]: username,
        email: email,
        title:title,
        music: fileUrl,
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
            .then((data) => {console.log(data); onClose();})
            .catch((error) => console.error(error));
    
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setMusicfile(file);
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
          console.log("url",data.music_url)
          setUploading(false);
          setUploadDone(true)
        })
        .catch((error) => {
          console.error("Error:", error);
          setUploading(false);
        });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-70 bg-gray-900 backdrop-blur-md">
      <div className="bg-gray-600 text-white w-[90%] lg:w-1/3 p-8 rounded-lg shadow-lg">
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
              className="w-full p-2 border rounded-lg focus:outline-none"
              value={username}
              required
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="w-full p-2 border rounded-lg focus:outline-none"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className=" flex justify-between items-center shadow-lg mb-4 w-full p-3 bg-white rounded-lg">
      {!musicfile ? (
        <div>Music File</div>
      ) : (
        <span className="mx-2 text-xs text-red-500">{musicfile.name}</span>
      )}
      <input
        className="hidden"
        id="fileInput"
        placeholder=""
        required
        name="musicfile"
        onChange={handleFileChange}
        type="file"
      />
      {!musicfile ? (
        <label
          htmlFor="fileInput"
          className="px-3 py-2 rounded-full border flex justify-between items-center cursor-pointer"
        >
          <div className="mx-1">Select File</div>
          <div className="mx-1">
            <img src="" alt="" />
          </div>
        </label>
      ) : (
        uploading ? (
          <button disabled>Uploading...</button>
        ) : !uploadDone ?(
          <button onClick={handleUpload}>Upload</button>
        ) : (<button onClick={handleUpload}>Done</button>)
      )}
    </div>

          <div className=" text-center w-full">
            <button
              type="submit"
              className=" w-1/2  bg-blue-500 text-center text-white px-4 py-2 rounded-lg"
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
    </div>
  );
};

export default FeaturePopup;
