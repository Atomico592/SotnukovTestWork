import axios from "axios";

const axiosApi = axios.create({
    baseUrl: "https://jsonplaceholder.typicode.com"
})

export default axiosApi