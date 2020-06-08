import Vue from 'vue'
import Vuex from 'vuex'
import { LOAD_PERSONS, SEARCH_PERSONS, SHOW_MODAL, HIDE_MODAL } from './mutation-types'
import { loadPersons, loadSpecies, searchPersons } from '../api/request'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoading: true,
        isSearch: false,
        hasMorePerons: true,
        pageNumber: 1,

        isModalShow: false,
        modalValue: {},

        persons: [],

    },
    getters: {
        hasPersons: state => {
            return state.persons.length > 0 ? true : false;
        },
        getSpecies: () => url => {
            return loadSpecies(url).then(res => res)
        }
    },
    mutations: {
        [LOAD_PERSONS](state) {
            if (state.hasMorePerons && !state.isSearch) {
                state.isLoading = true
                loadPersons(state.pageNumber)
                    .then(result => {
                        state.persons.push(...result.results)
                        state.persons.length !== result.count ? state.pageNumber++ : state.hasMorePerons = false
                    })
                    .catch(err => console.log(err))
                    .finally(() => {
                        state.isLoading = false
                    })
            }
        },

        [SEARCH_PERSONS](state, value) {
            state.isSearch = value === '' ? false : true
            searchPersons(value).then(result => {
                state.persons = result.results
            });

        },

        [SHOW_MODAL](state, value) {
            let offset = pageYOffset
            document.getElementById('app').style.cssText = ` top: -${offset}px; position: relative`
            document.body.style.cssText = `overflow: hidden; width: 100%; height: 100vh;`
            state.isModalShow = true
            state.modalValue = value
        },

        [HIDE_MODAL](state) {
            document.getElementById('app').style.cssText = ''
            document.body.style.cssText = ''
            state.isModalShow = false
            state.modalValue = {}
        }
    },
})