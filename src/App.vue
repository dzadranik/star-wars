<template lang="pug">
    #app.wrapper
        .header
            a.logo(href="/")
        main
            div
            .peoples(v-show="this.$store.state.isLoaded")
                Star(v-for="item in showPeople" :people="item" :key="item.id")

            Loader(v-show="!this.$store.state.isLoaded")
                
        .footer STAR WARS CHARACTER Encyclopedia, 2019
</template>

<script>
import Star from "./components/Star.vue";
import Loader from "./components/Loader.vue";

// function show(ms) {
// 	return new Promise(resolve => setTimeout(resolve, ms));
// }

export default {
	name: "App",
	components: {
		Star,
		Loader
	},
	data: function() {
		return {
			// showPeople: []
		};
	},
	computed: {
		showPeople: function() {
			return this.$store.state.people;
		}
	},
	mounted() {
		this.$store.commit("getPeople");
		// setTimeout(() => {
		// 	this.$store.commit("getPeople"),
		// 		// (this.showPeople = );
		// }, 300);
		// this.$store.commit("getPeople");
		// fetch("https://swapi.dev/api/people/")
		// 	.then(res => res.json())
		// 	.then(result => {
		// 		this.people = result.results;
		// 		// console.log(this.people);
		// 		setTimeout(() => (this.isLoaded = true), 1);
		// 	});
		// console.log(this.people);
		// axios.get("https://swapi.dev/api/people/").then(result => {
		// 	this.people = result.data.results;
		// 	console.log(this.people);
		// 	setTimeout(() => (this.isLoaded = true), 1);
		// });
		// async function demo() {
		// 	for (let i = 0; i < this.$store.state.people.length; i++) {
		// 		// this.showPeople.push(this.people[i]);
		// 		console.log(this.$store.state.people[i]);
		// 		await show(1000);
		// 	}
		// }
		// demo();
	}
};
</script>

<style lang="sass">
@import styles/reset

body
    background: #333333
    font-size: 18px
    font-family: Roboto

.wrapper
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

main
    max-width: 1000px
    margin: 0 auto

.peoples
    display: flex
    flex-wrap: wrap
    margin: 40px 20px
</style>
