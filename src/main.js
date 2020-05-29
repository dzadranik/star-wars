import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    people: [],
    isLoaded: false
  },
  mutations: {
    getPeople(state) {
      fetch("https://swapi.dev/api/people/")
        .then(res => res.json())
        .then(result => {
          state.people = result.results;
          state.isLoaded = true
        });
    },
  },
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')

