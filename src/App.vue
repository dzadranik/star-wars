<template lang="pug">
    div#app
        .header
            a.logo(href="/")
        main
            .peoples
                Star(v-for="item in people" :people="item" :key="item.id" v-show="isLoaded")

            div(v-show="!isLoaded") Loading
        .footer STAR WARS CHARACTER Encyclopedia, 2019
</template>

<script>
import Star from "./components/Star.vue";

export default {
	name: "App",
	components: {
		Star
	},
	data: function() {
		return {
			people: [],
			isLoaded: false
		};
	},
	mounted() {
		fetch("https://swapi.dev/api/people/")
			.then(res => res.json())
			.then(
				result => {
					this.people = result.results;
					this.isLoaded = true;
				},
				error => {
					this.isLoaded = false;
					error;
				}
			);
	}
};
</script>

<style lang="sass">
@import styles/reset

body
    background: #333333
    font-size: 18px

#app
    font-family: Roboto

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
    height: 239px
    width: 400px
    background-position: center center
    background-repeat: no-repeat

.footer
    background: #1A1A1A
    text-align: center
    color: #ffffff
    padding: 30px
    text-transform: uppercase

main
    max-width: 1000px
    margin: 0 auto

.peoples
    display: flex
    flex-wrap: wrap
    margin: 40px 20px
</style>
