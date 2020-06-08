<template lang="pug">
.modal__wrapper(@click.self="HIDE_MODAL()")
    .modal__container
        .modal__close(@click="HIDE_MODAL()") 
            include ../assets/img/close.svg
        .modal__header
            .modal__avatar(:style="modalValue.background") {{person.name[0]}}
            .modal__name {{person.name}}
        .modal__descriptions
            .modal__description
            .modal__item
                .modal__item-name Birth year
                .modal__item-value {{person.birth_year}}
            .modal__item
                .modal__item-name Species
                .modal__item-value {{modalValue.species}}
            .modal__item
                .modal__item-name Gender
                .modal__item-value {{person.gender}}

            .modal__description
                .modal__item
                    .modal__item-name Homeworld
                    .modal__item-value {{person.homeworld}}
                .modal__item
                    .modal__item-name Films
                    .modal__item-value {{person.films}}

    
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
    name: "Modal",
    computed: {
        ...mapState(["modalValue"]),
        person: function() {
            return this.modalValue.person;
        }
    },
    methods: {
        ...mapMutations(["HIDE_MODAL"])
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
        width: 800px
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
        margin-bottom: 70px
        display: flex
        align-items: center

    &__avatar
        margin-right: 16px
        +avatar
</style>