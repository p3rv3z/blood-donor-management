import AuthService from "../../services/AuthService";

export const namespaced = true;

export const state = {
  user: null,
};

export const mutations = {
  SET_USER(state, payload) {
    state.user = payload;
  },
};

export const actions = {
  async getAuthUser({ commit }) {
    try {
      const response = await AuthService.getAuthUser();
      commit("SET_USER", response.data);
      return !! response.data;
    } catch (error) {
      commit("SET_USER", null);
    }
  },

  logout({ commit }) {
    commit("SET_USER", null);
  }

};

export const getters = {
  isAuthenticated: state =>  !!state.user,
  authUser: state => state.user,
};

export default {
  state, mutations, actions, getters
}
