<template lang="pug">
    #app.app.js-app
        .header
            a.logo(href="/")
        main.main
            Search
            .stars
                Star(v-for="item in stars" :star="item" :key="item.id")

            Loader(v-show="!isLoaded")
                
        .footer STAR WARS CHARACTER Encyclopedia, 2019
</template>

<script>
import Star from "./components/Star.vue";
import Search from "./components/Search.vue";
import Loader from "./components/Loader.vue";
import { mapState } from "vuex";

export default {
    name: "App",
    components: {
        Star,
        Loader,
        Search
    },
    computed: {
        ...mapState(["stars", "isLoaded"])
    },
    methods: {
        getMoreStars: function() {
            this.$store.commit("getStar");
        }
    },
    mounted() {
        let commit = this.$store.commit,
            getMoreStars = this.getMoreStars,
            isLock = false;

        setTimeout(function() {
            commit("getStar");
            isLock = true;
        }, 1000);

        window.addEventListener("scroll", function() {
            if (
                document.documentElement.scrollTop + window.innerHeight >=
                    document.documentElement.offsetHeight - 10 &&
                isLock
            ) {
                isLock = false;
                commit("changeIsLoaded");
                setTimeout(function() {
                    getMoreStars();
                    isLock = true;
                }, 1000);
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

.app
    min-height: 100vh
    position: relative
    padding-bottom: 120px

.header
    height: 33vh
    width: 100%
    background-image: url(./assets/img/header.jpg)
    background-position: center center
    background-repeat: no-repeat
    background-size: cover
    display: flex
    align-items: center
    justify-content: center

.logo
    display: block
    background-image: url(./assets/img/logo.png)
    height: 60%
    width: 50%
    background-position: center center
    background-repeat: no-repeat
    background-size: contain

.footer
    background: #1A1A1A
    text-align: center
    color: #ffffff
    padding: 30px
    text-transform: uppercase
    position: absolute
    bottom: 0
    width: 100%

.main
    max-width: 1000px
    margin: 0 auto
    padding: 0 20px

.stars
    display: flex
    flex-wrap: wrap
    margin: 40px 0
    justify-content: space-between
</style>
