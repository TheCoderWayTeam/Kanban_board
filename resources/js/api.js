import axios from 'axios';

export const API_URL = `http://127.0.0.1:8000/api`

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = api_token;
    return config;
})


export default $api;