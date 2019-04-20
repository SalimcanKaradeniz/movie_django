<template>
    <div>
        <div class="mobile-container">
            <img class="headerimg" src="/static/js/components/mobile/mobil-Img/anasayfaImg/net2.png">
            <a class="active" href="/">Anasayfa</a>
            <a href="#">İletişim</a>
            <div class="sidenav" v-if="toggleIcon">
                <a href="#">Home</a>
                <a href="#">Tv shows</a>
                <a href="#">Movies</a>
                <a href="#">Dram</a>
            </div>
            <div class="container" v-on:click='toggleIcon = !toggleIcon' onclick="toggleIconChange(this)">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-header",
        data: function () {
            return {
                toggleIcon: false
            }
        },
    }
</script>

<style>
</style>
</style>