<template lang="pug">
    .person(@click="showModal")
        .person__avatar(:style="background") {{person.name[0]}}
        .person__name {{person.name}}
        .person__species {{species}}
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { getRandomColor } from "../js/help-function";

export default {
    name: "Person",
    props: {
        person: Object
    },
    data: function() {
        return {
            species: ""
        };
    },
    computed: {
        ...mapGetters(["getSpecies"]),
        background: function() {
            return `background: ${getRandomColor()}`;
        }
    },
    methods: {
        ...mapMutations(["SHOW_MODAL"]),

        showModal: function() {
            this.SHOW_MODAL({
                person: this.person,
                species: this.species,
                background: this.background
            });
        }
    },
    mounted() {
        if (this.person.species.length > 0) {
            let species = this.getSpecies(this.person.species[0]);
            species.then(res => (this.species = res.name));
        }
    }
};
</script>

<style lang="sass">
@import ../styles/mixins

.person
    background: #1A1A1A
    border-radius: 8px
    flex: 0 0 calc(50% - 15px)
    margin-bottom: 30px
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    padding: 60px 0
    cursor: pointer
    position: relative
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.4)
    +transition(box-shadow)
    &:hover
        box-shadow: 0px 10px 40px rgba(37, 136, 167, 0.38)
    
    &__avatar
        margin-bottom: 10px
        +avatar

    &__name
        margin-bottom: 5px

    &__species
        color: #808080
        font-size: 13px
        line-height: 15px
        height: 15px

    @media only screen and (max-width: 766px)
        flex-basis: 100%
</style>
