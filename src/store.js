import { createStore } from "vuex";
import axios from 'axios';

export default createStore({
  state: {
    token: null,
    user: null,
    drivers: [],
  },
  mutations: {
    storeTokenInApp(state, myToken) {
      state.token = myToken;
    },
    storeUserInApp(state, theUser) {
      state.user = theUser;
    },
    storeMovies(state, drivers){
      state.drivers = drivers;
    }
  },
  actions: {
    getDrivers({commit}){
      axios.get("/drivers").then((aResponse)=>{
        console.log("Response in /drivers", aResponse);
        commit("storeMovies", aResponse.data);
      })
    }
  },
});
