import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api" ,
    params : {
        key: "81b2d8912fa94298bc3dcbae0967c5b2"
    }
})