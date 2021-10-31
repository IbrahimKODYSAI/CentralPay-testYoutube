import React from "react";



const Video = ({ data, onVideoSelected, setShow, getPlaylistItem }) => {

    const getCss = (imageurl) => {
      const _styles = {
        backgroundImage: `url(${imageurl})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "180px",
        width: "320px",
        position: "relative"
      };
      return _styles;
    }

    const handleThumbnailClick = (video) => {
      onVideoSelected(video)
      setShow(true)
      if (video.id.kind === "youtube#channel") return setShow(false)
      if (video.id.kind === "youtube#playlist") return (getPlaylistItem(video.id.playlistId), setShow(false))
    }
    
    const constructVideoTitles = (vidoesData) => {
      return (
        vidoesData && vidoesData.map((video, index) => {
            return ( 
              video.snippet.thumbnails.high && 
                  <div
                      className="w-80 my-3 sm:m-3"
                      key={index}
                  >
                      <div
                        className="cursor-pointer"
                        style={getCss(video.snippet.thumbnails.high.url)} key={index}
                        onClick={() => handleThumbnailClick(video)}
                      />
                      <p className="title font-bold cursor-pointer">{video.id.kind === "youtube#channel" ? video.snippet.channelTitle : video.snippet.title}</p>
                      <p>{video.id.kind === "youtube#playlist" ? `Playlist by : ${video.snippet.channelTitle}` : video.id.kind === "youtube#channel" ? "Youtube channel" : video.snippet.channelTitle}</p>
                  </div>
            );
          })
      )
    }

    return (
      <div className="flex flex-wrap mx-auto justify-between sm:justify-center">
          {
            data && data.length > 0 &&(
                constructVideoTitles(data)
            )
          }
      </div>
  );
};

export default Video;