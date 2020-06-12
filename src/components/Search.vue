<template lang="pug">
    .search
        label.search__label(
            for="search"
            :class="{'to-top': !isEmptyInput}"
            ) Search by name
        input.search__input#search(
            v-model="inputValue"
            @input="searchPersons" 
            )
</template>

<script>
import { mapActions } from "vuex";
import { debounce } from "../js/help-functions";

export default {
	name: "Search",
	data: function() {
		return {
			inputValue: ""
		};
	},
	computed: {
		isEmptyInput: function() {
			return this.inputValue === "" ? true : false;
		},
		debounceSerch: function() {
			return debounce(this.searchPersonsValue, 900);
		}
	},
	methods: {
		...mapActions(["searchPersonsValue"]),
		searchPersons() {
			this.debounceSerch(this.inputValue);
		}
	}
};
</script>

<style lang="sass">
@import ~@/sass/icon-base

.search
    position: relative
    margin: 60px auto
    padding-top: 20px
    font-size: 16px
    width: 800px
    max-width: 100%

    &__label
        font-size: 16px
        color: #808080
        position: absolute
        bottom: 5px
        left: 0
        transition: all ease-in .3s
        &.to-top
            bottom: 25px

    &__input
        background: transparent $icon-search no-repeat right center
        border-bottom: 1px solid #808080
        border-top: 0
        padding: 5px 0
        border-left: 0
        border-right: 0
        width: 100%
        outline: none
        color: #ffffff
</style>