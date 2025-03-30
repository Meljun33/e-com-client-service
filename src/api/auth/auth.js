import axios from "axios";

const http = (baseUrl)=>{

    const http = axios.create({baseURL: baseUrl})

    http.interceptors.request.use((config)=>{
        const token = "";

        config.headers.Accept = "application/json";
        config.headers.Authorization = 'Bearer ${Token}';

        return config;

    });

    return http;

};

export default{
    baseUrl: 'http://localhost:8000',
    endpoit: "/api",

    login(param){

        return http(this.baseUrl).post(`${this.endpoint}/login`, params);
    },

};

