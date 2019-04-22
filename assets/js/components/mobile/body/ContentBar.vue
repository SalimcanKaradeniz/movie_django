<template>
    <div>
        <SearchButton></SearchButton>
        <HomePageMovie></HomePageMovie>
        <PreviousMovies></PreviousMovies>
        <HomePageCategory></HomePageCategory>
        <PopularMovies></PopularMovies>
        <Allstarmovie></Allstarmovie>
    </div>
</template>

<script>
    import HomePageCategory from "./HomePageCategory.vue";
    import HomePageMovie from "./HomePageMovie.vue";
    import PreviousMovies from "./PreviousMovies.vue";
    import PopularMovies from "./PopularMovies.vue";
    import Allstarmovie from "./Allstarmovie.vue";
    import SearchButton from "./SearchButton.vue";

    export default {
        name: "ContentBar",
        components: {SearchButton, Allstarmovie, PopularMovies, PreviousMovies, HomePageMovie, HomePageCategory}
    }
</script>

<style scoped>
</style>