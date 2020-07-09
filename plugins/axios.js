const baseUrl = "http://localhost:3005";
export default function({ $axios }) {
  // request interceptor
  $axios.interceptors.request.use(
    config => {
      // do something before request is sent
      config.url = `${baseUrl}${config.url}`;
      return config;
    },
    error => {
      // do something with request error
      return Promise.reject(error);
    }
  );
  $axios.onRequest(config => {
    console.log("Making request to " + config.url);
  });
}
