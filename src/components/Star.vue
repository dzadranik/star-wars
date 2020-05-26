<template lang="pug">
    .people 
        div {{people.name}}
        div(v-if="people.species.length > 0") {{people.species}}
</template>

<script>
export default {
	name: "Star",
	props: ["people"]
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
    text-align: center
    padding: 60px 0

    &:nth-child(odd)
        margin-right: 20px

    &:hover
        box-shadow: 0px 10px 40px rgba(37, 136, 167, 0.38)
</style>
