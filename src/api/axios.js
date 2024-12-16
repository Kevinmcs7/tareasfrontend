import axios from "axios";

const instance = axios.create ({
    baseURL: 'https://tareas-production.up.railway.app/api',
    withCredentials: true 
})

export default instance