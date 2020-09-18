import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    personalInfo: {
      login: null,
      password: null,
      email: null,
      userName: null
    }
  },
  mutations: {
    changeInfo: (state, info) => {
      state.personalInfo = info
    }
  }
})
