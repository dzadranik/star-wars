<template lang="pug">
    .people( :class="{show: this.isShow}")
        .people__avatar( :style='this.background') {{people.name[0]}}
        div {{people.name}}
        .people__species {{species.name}}
</template>

<script>
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
export default {
	name: "Star",
	props: ["people"],

	data: function() {
		return {
			species: "",
			isShow: false
		};
	},
	mounted() {
		fetch(this.people.species)
			.then(res => res.json())
			.then(
				result => {
					this.species = result;
				},
				error => {
					error;
				}
			);
		setTimeout(() => (this.isShow = true), 100);
	},
	computed: {
		background: function() {
			return (
				"background:" +
				"rgb(" +
				getRandomInt(0, 255) +
				", " +
				getRandomInt(0, 255) +
				", " +
				getRandomInt(0, 255) +
				")"
			);
		}
	}
};
</script>

<style scoped lang="sass">
.people
    background: black
    color: white
    background: #1A1A1A
    border-radius: 8px
    flex: 0 0 calc(50% - 10px)
    margin-bottom: 20px
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    padding: 60px 0
    transition: all ease-in .5s
    cursor: pointer
    position: relative
    bottom: -15px
    opacity: 0
    &.show
        bottom: 0
        opacity: 1
    >*
        margin-bottom: 10px

    &:nth-child(odd)
        margin-right: 20px

    &:hover
        box-shadow: 0px 10px 40px rgba(37, 136, 167, 0.38)
    
    &__avatar
        font-weight: 500
        font-size: 48px
        line-height: 56px
        border-radius: 50%
        width: 80px
        height: 80px
        display: flex
        align-items: center
        justify-content: center
    
    &__species
        color: #808080
        fonr-size: 13px
        line-height: 15px
</style>
