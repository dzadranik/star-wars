<template lang="pug">
    .search
        label(for="search" :class="{'to-top': !this.isEmptyInput}") Search by name
        input(id="search" v-on:input="activeInput")
</template>

<script>
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
export default {
    name: "Search",
    data: function() {
        return {
            search: ""
        };
    },
    computed: {
        isEmptyInput: function() {
            return this.search === "";
        }
    },
    methods: {
        activeInput: function() {
            let commit = this.$store.commit,
                searchValue = document.getElementById("search").value;
            this.search = searchValue;

            function searchCommit() {
                commit("search", searchValue);
            }
            debounce(searchCommit, 1000)();
        }
    }
};
</script>

<style scoped lang="sass">
.search
    position: relative
    margin: 60px auto
    padding-top: 20px
    font-size: 16px
    width: 800px
    max-width: 100%

    label
        font-size: 16px
        color: #808080
        position: absolute
        bottom: 5px
        left: 0
        transition: all ease-in .3s
        &.to-top
            bottom: 25px

    input
        background: transparent
        border-bottom: 1px solid #808080
        border-top: 0
        padding: 5px 0
        border-left: 0
        border-right: 0
        width: 100%
        outline: none
        color: #ffffff
</style>