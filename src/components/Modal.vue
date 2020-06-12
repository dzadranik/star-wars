<template lang="pug">
.modal(@click.self="hideModal()")
    .modal__container
        .modal__close(@click="hideModal()") 
            include ../assets/img/close.svg
        template(v-if="!isLoad")
            loader
            
        transition-group(name="fade")
            template(v-if="isLoad")
                .modal__header(key="modal-header")
                    .modal__avatar(:style="modalValue.background") {{person.name[0]}}
                    .modal__name {{person.name}}
                .modal__description(key="modal-description")
                    .modal__items
                        .modal__item
                            .modal__item-birth Birth year
                            .modal__item-value {{person.birth_year}}
                        .modal__item
                            .modal__item-species Species
                            .modal__item-value {{modalValue.species}}
                        .modal__item
                            .modal__item-gender Gender
                            .modal__item-value {{person.gender}}

                    .modal__items
                        .modal__item
                            .modal__item-home Homeworld
                            .modal__item-value {{homeworld}}
                        .modal__item
                            .modal__item-films Films
                            .modal__item-value 
                                template(v-for="film in films") {{film}}
                                    br

</template>
<script>
import { mapState, mapActions } from "vuex";
import Loader from "./Loader.vue";
import { loadPersonsValue } from "../api/request";
import { disableScroll, enableScroll } from "../js/help-functions";

export default {
	name: "Modal",
	components: {
		Loader
	},
	data: function() {
		return {
			homeworld: "",
			films: [],
			isLoad: false
		};
	},
	computed: {
		...mapState(["modalValue"]),
		person: function() {
			return this.modalValue.person;
		}
	},
	methods: {
		...mapActions(["hideModal"])
	},
	beforeMount() {
		let allPromise = [];
		if (this.person.homeworld.length > 0) {
			let homeworld = loadPersonsValue(this.person.homeworld);
			allPromise.push(homeworld.then(res => (this.homeworld = res.name)));
		}
		if (this.person.films.length > 0) {
			for (let i = 0; i < this.person.films.length; i++) {
				let films = loadPersonsValue(this.person.films[i]);
				allPromise.push(films.then(res => this.films.push(res.title)));
			}
		}
		Promise.all(allPromise).then(() => (this.isLoad = true));
		disableScroll();
	},
	beforeDestroy() {
		enableScroll();
	}
};
</script>
<style lang="sass">
@import ~@/sass/mixins
@import ~@/sass/icon-base

.modal
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    min-height: 100vh
    width: 100%
    backdrop-filter: blur(5px)

    &__container
        background: #1A1A1A
        padding: 70px
        min-width: 750px
        max-width: 100%
        box-sizing: border-box
        border-radius: 8px
        position: absolute
        top: 50%
        left: 50%
        box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.4)
        transform: translate(-50%, -50%)
    
    &__close
        position: absolute
        top: 16px
        right: 16px
        cursor: pointer
        .close
            stroke: #ffffff
            +transition(stroke)
        &:hover
            .close
                stroke: #2588a7
        
    &__header
        border-bottom: 2px solid #808080
        padding-bottom: 60px
        margin-bottom: 50px
        display: flex
        align-items: center

    &__avatar
        margin-right: 16px
        +avatar

    &__description
        display: flex
        justify-content: space-between
    
    &__items
        flex-grow: 1
        &:first-child
            margin-right: 10px

    &__item
        display: flex
        font: 18px
        line-height: 30px
        margin-bottom: 15px
        
    %itemName
        color: #808080
        flex: 0 0 150px
        position: relative
        padding-left: 35px
        &:before
            height: 24px
            width: 24px
            left: 0
            top: 2px
            content: ''
            display: block
            position: absolute
            background-repeat: no-repeat
            background-position: center

    @each $selector, $value in ('birth': $icon-birth, 'species': $icon-species, 'gender': $icon-gender, 'home': $icon-home, 'films': $icon-films)
        &__item-#{$selector}
            @extend %itemName
            &:before
                background-image: $value

    &__item-value
        color: #ffffff
        font-weight: bold

    @media only screen and (max-width: 766px)
        &__container
            min-width: auto
            width: 100%
            height: 100%
            top: 0
            bottom: 0
            left: 0
            transform: none
            padding: 20px

        &__header
            padding-bottom: 40px

        &__description
            flex-wrap: wrap

        &__items
            flex: 0 0 100%
            &:first-child
                margin-right: 0

        &__item
            font-size: 16px
            margin-bottom: 5px

</style>