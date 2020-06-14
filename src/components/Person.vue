<template lang="pug">
.person(
    v-show="isLoad"
    @click="showModalInformation"
    )
    .person__avatar(:style="getBackground()") {{person.name[0]}}
    .person__name {{person.name}}
    .person__species {{species}}
</template>

<script>
import { mapActions } from "vuex";
import { getRandomColor } from "../js/help-functions";
import { loadPersonsValue } from "../api/request";

export default {
	name: "Person",
	props: {
		person: Object
	},
	data: function() {
		return {
			species: "",
			isLoad: false
		};
	},
	methods: {
		...mapActions(["showModal"]),
		getBackground: function() {
			return `background-color: ${getRandomColor()}`;
		},

		showModalInformation: function() {
			this.showModal({
				person: this.person,
				species: this.species,
				background: this.getBackground()
			});
		}
	},
	async mounted() {
		if (this.person.species.length > 0) {
			let species = await loadPersonsValue(this.person.species[0]);
			this.species = species.name;
			this.isLoad = true;
		} else {
			this.isLoad = true;
		}
	}
};
</script>

<style lang="sass">
@import ~@/sass/mixins

.person
    background: #1A1A1A
    border-radius: 8px
    width: 45%
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

    @media only screen and (max-width: 766px)
        flex-basis: 100%
</style>
