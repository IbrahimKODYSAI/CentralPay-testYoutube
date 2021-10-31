import React, { useEffect, useState } from "react";

//import locaux
import youtubeApi from 'api/api-youtube'
import Header from 'components/Header'
import VideoList from "components/VideoList";
import Videoplayer from "components/VideoPlayer";
import './App.css';



function App() { 

  const [inputValue, setInputValue] = useState("");
  const [allDatas, setAllDatas] = useState([]);
  const [nextPage, setNextPage] = useState("")
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [show, setShow] = useState(false);
  // const [isFetching, setIsFetching] = useState(false);
  
  const onSearch = async (inputValue, orderBy) => {
    const response = await youtubeApi.get("/search", {
      params: {
        q:inputValue,
        order: orderBy,
      }
    })
    setAllDatas(response.data.items)
    setNextPage(response.data.nextPageToken)
  }

  const getPlaylistItem = async (id) => {
    const response = await youtubeApi.get("/playlistItems", {
      params: {
        playlistId:id
      }
    })
    setAllDatas(response.data.items)
  }

  const loadMore = async () => {
    const response = await youtubeApi.get('/search', {
      params: {
        pageToken: nextPage,
      }
    })
    setAllDatas(allDatas => [...allDatas, ...response.data.items])
    setNextPage(response.data.nextPageToken)
    console.log(allDatas)
  }

  const onVideoSelected = (video) => {
    setSelectedVideoId(video)
  }

  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight
    ) {
      loadMore()
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Header
        onSearch={onSearch}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <main className="App-body">
        {show &&
          <Videoplayer
            setShow={setShow}
            video={selectedVideoId}
            onVideoSelected={onVideoSelected}
          />
        }
        <VideoList
          onSearch={onSearch}
          getPlaylistItem={getPlaylistItem}
          inputValue={inputValue}
          setShow={setShow}
          data={allDatas}
          onVideoSelected={onVideoSelected}
        />
      </main>
    </div>
  );
}

export default App;
