import axios from "axios";

export const api = axios.create({
    baseURL: 'https://hamburgueria-kenzie-v2.herokuapp.com/',
    responseType: 'json',
    timeout: 7000
})