<template>
    <div class="film-list">
        <div class="film">
            <img src="https://www.filmiifullizle.com/uploads/film/2018/03/olduren-tutku-passion-2012-turkce-dublaj-izle-935.jpg"
                 alt="">
            <!--button-->
            <Button></Button>
            <!--detail-->
            <Detail></Detail>
        </div>
    </div>
</template>

<script>
    import Button from "./BannerPlayButton.vue"
    import Detail from "./BannerFilmDetail.vue"
    export default {
        name: "BannerFilm",
        components: {Button, Detail}
    }
</script>

<style scoped>

</style>