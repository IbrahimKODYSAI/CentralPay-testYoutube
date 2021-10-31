import React from "react";
import { useState } from "react/cjs/react.development";


//import locaux
import Video from "./video"


const VideoList = ({
        data,
        onVideoSelected,
        setShow,
        onSearch,
        inputValue,
        getPlaylistItem
    }) => {

    const [showFilter, setShowFilter] = useState(false)

    return (
        <div className="p-16">
            <div>
                {data.length === 0 && 
                    <div className="bg-blue-100 rounded w-6/12 mx-auto my-4 h-30 p-4 overflow-hidden">
                        <h1 className="font-bold text-lg py-2">Quick and easy to use</h1>
                        <p>It couldn't be easier and faster as a youtube video browser: you simply do a search and the content you want will appear in original quality here.</p>
                    </div>
                }
                {data.length > 0 &&
                <div>
                    <div className="my-5">
                        <h3 className="text-center text-lg my-5">
                            Results for : <span className="font-bold">{inputValue}</span>
                        </h3>
                        <p className="cursor-pointer p-1 w-20 hover:bg-gray-200 rounded" onClick={(e) => setShowFilter(!showFilter)}><i className="fa fa-sliders" aria-hidden="true"></i> Filter</p>
                        
                        {showFilter &&
                        <div className="w-12/12 border my-2 rounded">
                            <div className="my-4 flex flex-row justify-center">
                                <button className="mx-2 px-3 py-2 rounded-full bg-gray-200 text-xs hover:bg-gray-300"value="relevance" onClick={(e) => onSearch(inputValue, e.target.value)}>Relevance</button>
                                <button className="mx-2 px-3 py-2 rounded-full bg-gray-200 text-xs hover:bg-gray-300"value="viewCount" onClick={(e) => onSearch(inputValue, e.target.value)}>Views</button>
                                <button className="mx-2 px-3 py-2 rounded-full bg-gray-200 text-xs hover:bg-gray-300"value="date" onClick={(e) => onSearch(inputValue, e.target.value)}>Date</button>
                                <button className="mx-2 px-3 py-2 rounded-full bg-gray-200 text-xs hover:bg-gray-300"value="rating" onClick={(e) => onSearch(inputValue, e.target.value)}>Rating</button>
                            </div>
                        </div>
                        }
                        <p className="cursor-pointer py-2" onClick={() => onSearch(inputValue)}><i className="fas fa-undo-alt"></i></p>
                    </div>
                    <Video setShow={setShow} data={data} onVideoSelected={onVideoSelected} getPlaylistItem={getPlaylistItem}/>
                </div>
                }
            </div>
        </div>
    )
}

export default VideoList;