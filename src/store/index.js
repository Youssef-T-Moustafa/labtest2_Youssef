import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    profile: {
      name: "Youssef Moustafa",
      courseYear: "3SECJH",
      matrixNo: "A21MJ0145",
      address: "UTMKL, Kuala Lumpur",
    },
    photos: [],
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setPhotos(state, photos) {
      state.photos = photos;
    },
  },
  actions: {
    fetchPhotos({ commit }, { query } = {}) {
      let url = "https://jsonplaceholder.typicode.com/photos?_limit=10";
      if (query) {
        url += `&q=${query}`;
      }
      axios.get(url).then((response) => {
        commit("setPhotos", response.data);
      });
    },
    updateProfile({ commit }, profile) {
      commit("setProfile", profile);
    },
  },
  getters: {
    profile: (state) => state.profile,
    photos: (state) => state.photos,
  },
});

export default store;
