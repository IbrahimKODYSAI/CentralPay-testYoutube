import React from "react";

const Videoplayer = ({video, setShow}) => {

  const handleSourceType = (video) => {

    if(video.id.kind === "youtube#video"){
      return `https://www.youtube.com/embed/${video.id.videoId}`
    }else {
      return `https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`
    }
  }

  return (
    <div className="fixed z-10 inset-0">
      <div className="text-center">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setShow(false)}></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle">
            <iframe
                title="video frame"
                width="700"
                height="460"
                src={handleSourceType(video)}
                frameBorder="0"
                allow="autoplay; encrypted-media; fullscreen"
            />
        </div>
      </div>
  </div>
  );
};

export default Videoplayer;