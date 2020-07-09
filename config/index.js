import axios from "axios";
const myaxios = axios.create({});

const baseUrl = "http://localhost:3005";

let i = 0;

export default {
  axiosInit() {
    console.log("in");
    // myaxios.interceptors.request.use(
    //   function(config) {
    //     i++;
    //     console.log(config.url, i);
    //     // Do something before request is sent
    //     return config;
    //   },
    //   function(error) {
    //     // Do something with request error
    //     return Promise.reject(error);
    //   }
    // );
  }
};
