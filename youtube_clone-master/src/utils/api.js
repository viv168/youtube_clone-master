import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: {hl: 'en', gl: 'US'},
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY || "37be9dde37mshc3efb6a72498eddp14a2a4jsn2915e1fd0234" ,
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
  };

 export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  };