import axios from "axios";

const apiKey= process.env.API_KEY

const client = axios.create({
    baseURL: 'https://v3.football.api-sports.io',
    headers: {  "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": apiKey }
})


const http = {
    get : client.get
  };
  
  export default http;