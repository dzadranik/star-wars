import Vue from 'vue'
import Vuex from 'vuex'
import {
	LOAD_PERSONS,
	SEARCH_PERSONS,
	SET_MODAL_VALUE,
	TOGGLE_MODAL_VISIBLE,
} from './mutation-types'
import { loadPersonsValue, searchPersons } from '../api/request'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isLoading: true,
		isSearch: false,
		nextPage: 'https://swapi.dev/api/people/',

		isModalShow: false,
		modalValue: {},

		persons: [],
		personsSearch: [],
	},
	mutations: {
		[LOAD_PERSONS](state) {
			state.isLoading = true
			setTimeout(function() {
				loadPersonsValue(state.nextPage)
					.then((result) => {
						state.persons.push(...result.results)
						state.nextPage = result.next
					})
					.catch((err) => console.log('!!', err))
					.finally(() => {
						state.isLoading = false
					})
			}, 1000)
		},

		[SEARCH_PERSONS](state, value) {
			state.isSearch = value === '' ? false : true
			searchPersons(value)
				.then((result) => {
					state.personsSearch = result.results
				})
				.catch((err) => console.log('!!', err))
		},

		[TOGGLE_MODAL_VISIBLE](state) {
			state.isModalShow = !state.isModalShow
		},

		[SET_MODAL_VALUE](state, value) {
			state.modalValue = value
		},
	},
	actions: {
		loadPersons({ commit, state }) {
			if (!state.isSearch) {
				if (state.nextPage) {
					commit('LOAD_PERSONS')
				}
			}
		},
		searchPersonsValue({ commit }, value) {
			commit('SEARCH_PERSONS', value)
		},
		showModal({ commit }, value) {
			commit('TOGGLE_MODAL_VISIBLE')
			commit('SET_MODAL_VALUE', value)
		},

		hideModal({ commit }) {
			commit('TOGGLE_MODAL_VISIBLE')
			commit('SET_MODAL_VALUE', {})
		},
	},
})
