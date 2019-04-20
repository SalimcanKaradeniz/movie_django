<template>
    <div>
        <div class="inputcontainer">
            <input class="homesearch" placeholder="Dizi, film, aktör ve kullanıcı ara...">
        </div>
        <homepageMovie></homepageMovie>
        <previous-movies></previous-movies>
        <homepageCategory></homepageCategory>
    </div>
</template>

<script>
    import homepageCategory from "./homepageCategory.vue";
    import homepageMovie from "./homepageMovie.vue";
    import PreviousMovies from "./previousMovies.vue";

    export default {
        name: "contentBar",
        components: {PreviousMovies, homepageMovie, homepageCategory}
    }
</script>

<style scoped>
</style>