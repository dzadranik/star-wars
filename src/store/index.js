import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let fetchStars = fetch("https://swapi.dev/api/people/")
    .then(res => res.json())

export default new Vuex.Store({
    state: {
        stars: [],
        showStars: [],
        isLoaded: false
    },
    getters: {

    },
    mutations: {
        changeIsLoaded(state) {
            state.isLoaded = false
        },
        getStar(state) {
            fetchStars.then(result => {
                state.stars.push(...result.results);
                state.isLoaded = true
            });
        },
        search(state, value) {
            state.stars = []
            fetchStars.then(result => {
                let searchResult = result.results.filter(item => {
                    let index = item.name.toLowerCase().indexOf(value.toLowerCase())
                    if (index >= 0) {
                        return item.name[index]
                    }
                })
                state.stars = searchResult
                state.isLoaded = true
            });

        }
    },
})