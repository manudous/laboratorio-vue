import { createStore } from "vuex";

export default createStore({
  state: {
    company: "microsoft"
  },
  mutations: {
    CHANGE_COMPANY (state, company) {
      this.state.company = company;
    }
  },
  actions: {},
  modules: {},
  getters: {
    company: (state) => state.company
  },
});
