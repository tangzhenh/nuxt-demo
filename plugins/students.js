let request;
const students = {
  getStudentsAsync: ({ curPage, eachPage }) => {
    return request
      ?.get(`/students`, {
        params: {
          curPage,
          eachPage
        }
      })
      .then(response => response.data)
      .catch(error => console.log(error));
  }
};

export default function({ $axios }, inject) {
  request = $axios;
  inject("students", students);
}
