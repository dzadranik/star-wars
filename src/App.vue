<template lang="pug">
    #app.sw
        .sw__header
        main.sw__main
            Search
            .sw__persons(v-if="hasPersons")
                Person(
                    v-for="person in persons"
                    :key="person.id"
                    :person="person"
                    )

            Loader(v-if="isLoading")
            .sw__all(v-if="!hasMorePerons") 
                include ./assets/img/falcon.svg
                
        .sw__footer STAR WARS CHARACTER Encyclopedia, 2019

        Modal(v-if="isModalShow")

</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import Person from "./components/Person.vue";
import Search from "./components/Search.vue";
import Loader from "./components/Loader.vue";
import Modal from "./components/Modal.vue";

export default {
    name: "App",
    components: {
        Person,
        Loader,
        Search,
        Modal
    },
    computed: {
        ...mapState(["persons", "isLoading", "hasMorePerons", "isModalShow"]),
        ...mapGetters(["hasPersons"])
    },
    methods: {
        ...mapMutations(["LOAD_PERSONS"])
    },
    mounted() {
        let loadPersons = this.LOAD_PERSONS;
        loadPersons();

        window.addEventListener("scroll", function() {
            if (
                document.documentElement.scrollTop + window.innerHeight >=
                document.documentElement.offsetHeight - 10
            ) {
                loadPersons();
            }
        });
    }
};
</script>

<style lang="sass">
@import styles/reset

body
    background: #333333
    font-size: 18px
    font-family: Roboto
    color: #ffffff
    &.hidden
        overflow: hidden
        width: 100%
        height: 100vh

.sw
    min-height: 100vh
    position: relative
    padding-bottom: 110px

    &__header
        height: 33vh
        width: 100%
        background-image: url(./assets/img/logo.png), url(./assets/img/header.jpg)
        background-position: center center
        background-repeat: no-repeat
        background-size: auto 50%, cover
        display: flex
        align-items: center
        justify-content: center

    &__main
        max-width: 1000px
        margin: 0 auto
        padding: 0 20px

    &__persons
        display: flex
        flex-wrap: wrap
        margin: 40px 0
        justify-content: space-between

    &__all
        text-align: center
        margin: 30px 0

    &__footer
        background: #1A1A1A
        text-align: center
        color: #ffffff
        padding: 30px
        text-transform: uppercase
        position: absolute
        bottom: 0
        width: 100%
</style>
