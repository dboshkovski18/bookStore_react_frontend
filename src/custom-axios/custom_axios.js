import axios from "axios";

const instance = axios.create({
    baseURL : "https://bookstore-spring-boot.herokuapp.com/api",
    headers : {
        'Access-Control-Allow-Origin' : '*'
    }
})

export default instance;
