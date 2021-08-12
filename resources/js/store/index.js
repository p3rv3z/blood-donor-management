import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import * as auth from "./modules/Auth";

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,

  modules: {
    auth,
  },

  plugins: [createPersistedState()]

});

export default store;
