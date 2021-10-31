import axios from "axios";

const API_KEY = "AIzaSyBqO3dQFAvnAIdfMbT5CSExGQI1JrVgVNI";


export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
      part: "snippet",
      maxResults: 10,
      key: API_KEY,
    },
    headers: {}
  });