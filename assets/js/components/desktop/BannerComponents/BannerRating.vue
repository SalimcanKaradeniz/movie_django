<template>
    <div class="imdb-rating">
        <p>{{point}}/10</p>
        <span>{{name}}</span>
    </div>
</template>

<script>
    export default {
        name: "BannerRating",
        props: ['point', 'name']
    }
</script>

<style scoped>

</style>