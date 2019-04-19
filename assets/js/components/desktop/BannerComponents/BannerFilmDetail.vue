<template>
    <div class="film-detail">
        <!--film name-->
        <FilmName></FilmName>
        <div class="film-description">
            <div class="description-top">
                <!--created-->
                <FilmCreated></FilmCreated>
                <!--genre-->
                <FilmGenre></FilmGenre>
            </div>
            <!--film subject-->
            <FilmSubject></FilmSubject>
        </div>
        <div class="description-bottom">
            <!--rating-->
            <Rating name="imdb puanı" point="7"></Rating>
            <Rating name="kullanıcı puanı" point="8"></Rating>
        </div>
    </div>
</template>

<script>
    import FilmName from "./BannerFilmName.vue"
    import FilmCreated from "./BannerFilmCreated.vue"
    import FilmGenre from "./BannerFilmGenre.vue"
    import FilmSubject from "./BannerFilmSubject.vue"
    import Rating from "./BannerRating.vue"
    export default {
        name: "BannerFilmDetail",
        components: {FilmName, FilmCreated, FilmGenre, FilmSubject, Rating}
    }
</script>

<style scoped>

</style>