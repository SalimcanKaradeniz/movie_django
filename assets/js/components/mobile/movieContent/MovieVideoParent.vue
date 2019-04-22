<template>
    <div>
        <SearchButton></SearchButton>
        <Moviename></Moviename>
        <MovieParts></MovieParts>
        <Movie></Movie>
        <Advertisement></Advertisement>
        <Movielike></Movielike>
        <Movieinfo></Movieinfo>
        <CommentContainer></CommentContainer>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
    </div>
</template>

<script>
    import Moviename from "./Moviename.vue";
    import MovieParts from "./MovieParts.vue";
    import Movie from "./Movie.vue";
    import Advertisement from "./Advertisement.vue";
    import Movielike from "./Movielike.vue";
    import Movieinfo from "./Movieinfo.vue";
    import CommentContainer from "./CommentContainer.vue";
    import SearchButton from "../body/SearchButton.vue";

    export default {
        name: "MovieVideoParent",
        components: {SearchButton, CommentContainer, Movieinfo, Movielike, Advertisement, Movie, MovieParts, Moviename},
    }
</script>

<style scoped>

</style>