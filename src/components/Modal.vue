<template lang="pug">
.modal__wrapper(@click.self="HIDE_MODAL()")
    .modal__container
        .modal__close(@click="HIDE_MODAL()") 
            include ../assets/img/close.svg
        template(v-if="!isLoad")
            loader
        template(v-if="isLoad")
            .modal__header
                .modal__avatar(:style="modalValue.background") {{person.name[0]}}
                .modal__name {{person.name}}
            .modal__descriptions
                .modal__description
                    .modal__item
                        .modal__item-name.modal__item-name--birth Birth year
                        .modal__item-value {{person.birth_year}}
                    .modal__item
                        .modal__item-name.modal__item-name--species Species
                        .modal__item-value {{modalValue.species}}
                    .modal__item
                        .modal__item-name.modal__item-name--gender Gender
                        .modal__item-value {{person.gender}}

                .modal__description
                    .modal__item
                        .modal__item-name.modal__item-name--home Homeworld
                        .modal__item-value {{homeworld}}
                    .modal__item
                        .modal__item-name.modal__item-name--films Films
                        .modal__item-value 
                            template(v-for="film in films") {{film}}
                                br

</template>
<script>
import { mapMutations, mapState, mapGetters } from "vuex";
import Loader from "./Loader.vue";

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
        ...mapGetters(["getOtherValue"]),
        person: function() {
            return this.modalValue.person;
        }
    },
    methods: {
        ...mapMutations(["HIDE_MODAL"])
    },
    beforeMount() {
        let allPromise = [];
        if (this.person.homeworld.length > 0) {
            let homeworld = this.getOtherValue(this.person.homeworld);
            allPromise.push(homeworld.then(res => (this.homeworld = res.name)));
        }
        if (this.person.films.length > 0) {
            for (let i = 0; i < this.person.films.length; i++) {
                let films = this.getOtherValue(this.person.films[i]);
                allPromise.push(films.then(res => this.films.push(res.title)));
            }
        }
        Promise.all(allPromise).then(() => (this.isLoad = true));
    }
};
</script>
<style lang="sass">
@import ../styles/mixins

.modal
    &__wrapper
        position: fixed
        top: 0
        right: 0
        bottom: 0
        left: 0
        height: 100vh
        width: 100%
        backdrop-filter: blur(5px)

    &__container
        background: #1A1A1A
        padding: 80px
        min-width: 800px
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
                stroke: rgba(37, 136, 167, 1)
        
    &__header
        border-bottom: 2px solid #808080
        padding-bottom: 70px
        margin-bottom: 50px
        display: flex
        align-items: center

    &__avatar
        margin-right: 16px
        +avatar

    &__descriptions
        display: flex
        justify-content: space-between
    
    &__description
        flex: 1 0 47%

    &__item
        display: flex
        font-size: 18px
        line-height: 30px
        margin-bottom: 15px

    &__item-name
        color: #808080
        flex: 0 0 150px
        position: relative
        padding-left: 35px
        &:before
            height: 24px
            width: 24px
            left: 0
            top: 5px
            content: ''
            display: block
            position: absolute
            background-size: contain
            background-repeat: no-repeat
            background-position: center
        &--birth:before
            background-image: url(../assets/img/icon-birth.svg)
        &--species:before
            background-image: url(../assets/img/icon-species.svg)
        &--gender:before
            background-image: url(../assets/img/icon-gender.svg)
        &--home:before
            background-image: url(../assets/img/icon-home.svg)
        &--films:before
            background-image: url(../assets/img/icon-films.svg)

    &__item-value
        color: #ffffff
        font-weight: bold

    @media only screen and (max-width: 766px)
        &__container
            width: 100%
            height: 100%
            top: 0
            bottom: 0
            left: 0
            transform: none
        &__descriptions
            flex-wrap: wrap
        &__description
            flex: 0 0 100%

</style>