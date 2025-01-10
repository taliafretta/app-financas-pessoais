import axios from 'axios';

const api = axios.create({
    // baseURL: 'https://localhost:3333'
    baseURL: 'https://192.168.1.17:3333'
})

export default api;