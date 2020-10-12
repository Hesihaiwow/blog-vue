import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token"),
    useInfo: JSON.parse(sessionStorage.getItem("userInfo"))
  },
  mutations: {
    SET_TOKEN: (state,token) => {
      state.token = token;
      localStorage.setItem("token",token)
    },
    SET_USERINFO: (state,userInfo) => {
      state.useInfo = userInfo;
      sessionStorage.setItem("userInfo",JSON.stringify(userInfo))
    },
    REMOVE_INFO: (state) => {
      status.userInfo = {};
      status.token = '';
      localStorage.setItem("token",'');
      sessionStorage.setItem("userInfo",JSON.stringify(''));
    }
  },
  getters: {
    getUser: state => {
      return state.useInfo;
    }
  },
  actions: {
  },
  modules: {
  }
})
