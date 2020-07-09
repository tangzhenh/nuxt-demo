import axios from "axios";

const baseUrl = "http://localhost:3005";

const service = axios.create({
  baseUrl,
  timeout: 5000
});

service.interceptors.request.use(
  config => {
    // do something before request is sent
    config.url = `${process.server ? baseUrl : "/api"}${config.url}`;
    console.log(config.url);
    return config;
  },
  error => {
    // do something with request error
    return Promise.reject(error);
  }
);

export default service;
