import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
      key: 'f61343a555684469abf61565337205af'  
    }
})