import request from "./request";

export default {
  getStudentsAsync: ({ curPage, eachPage }) => {
    return request
      .get(`/students`, {
        params: {
          curPage,
          eachPage
        }
      })
      .then(response => response.data)
      .catch(error => console.log(error));
  }
};
