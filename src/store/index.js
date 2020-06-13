import Vue from 'vue'
import Vuex from 'vuex'
import {
	SET_PERSONS,
	SET_NEXT_PAGE,
	SET_IS_LOADING,
	SET_SEARCH_PERSONS,
	SET_IS_SEARCH,
	SET_MODAL_VALUE,
	TOGGLE_MODAL_VISIBLE,
} from './mutation-types'
import { loadPersonsValue, searchPersons } from '../api/request'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isLoading: false,
		isSearch: false,
		nextPage: 'https://swapi.dev/api/people/',

		isModalShow: false,
		modalValue: {},

		persons: [],
	},
	mutations: {
		[SET_PERSONS](state, persons) {
			state.persons.push(...persons)
		},
		[SET_NEXT_PAGE](state, next) {
			state.nextPage = next
		},
		[SET_IS_LOADING](state, bool) {
			state.isLoading = bool
		},

		[SET_SEARCH_PERSONS](state, persons) {
			state.persons = persons
		},
		[SET_IS_SEARCH](state, value) {
			state.isSearch = value === '' ? false : true
		},

		[TOGGLE_MODAL_VISIBLE](state) {
			state.isModalShow = !state.isModalShow
		},

		[SET_MODAL_VALUE](state, value) {
			state.modalValue = value
		},
	},
	actions: {
		async loadPersons({ commit, state }) {
			if (state.nextPage && !state.isSearch && !state.isLoading) {
				commit('SET_IS_LOADING', true)
				const value = await loadPersonsValue(state.nextPage)
				if (value.results) {
					setTimeout(function() {
						commit('SET_PERSONS', value.results)
						commit('SET_NEXT_PAGE', value.next)
						commit('SET_IS_LOADING', false)
					}, 1000)
				} else {
					console.log('!!ERROR', value)
				}
			}
		},
		searchPersons({ commit }, value) {
			commit('SET_IS_SEARCH', value)
			searchPersons(value)
				.then((result) => {
					commit('SET_SEARCH_PERSONS', result.results)
					if (result.next) commit('SET_NEXT_PAGE', result.next)
				})
				.catch((err) => console.log('!!ERROR', err))
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
