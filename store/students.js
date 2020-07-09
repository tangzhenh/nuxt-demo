import _ from "lodash";
import StudentsApi from "../api/students";

export const state = () => ({
  curPage: 1,
  eachPage: 10,
  total: 0,
  maxPage: 0,
  rows: []
});

export const mutations = {
  getStudents: (state, payload) => Object.assign(state, payload),
  setCur: (state, curPage) => (state.curPage = curPage)
};

export const actions = {
  getStudentsByPage: async ({ state, commit }) => {
    const { curPage, eachPage } = state;
    const data = await StudentsApi.getStudentsAsync({
      curPage,
      eachPage
    });
    commit("getStudents", data);
  }
};
