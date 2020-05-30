<template  lang="pug">
    .loader
        include ../assets/img/falcon.svg
</template>

<script>
export default {
	name: "Loader"
};
</script>

<style lang="sass">
@keyframes spin 
    to
        transform: rotate(1turn)

.loader
    width: 240px
    height: 240px
    margin: 40px auto
    padding-top: 86px
    box-sizing: border-box

    svg
        animation: spin 3s infinite linear
        transform-origin: 120px

</style>