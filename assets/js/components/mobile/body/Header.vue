<template>
    <div class="mobile-container">
        <div class="headerx">
            <a href="/mobile" class="header-site ui-link">
                <span style="color: #ed4631;">Alpha</span>Filmizle.com
            </a>
            <div class="container" v-on:click='toggleIcon = !toggleIcon' onclick="toggleIconChange(this)">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
            <div class="sidenav" v-if="toggleIcon">
                <a href="#">Home</a>
                <a href="#">Tv shows</a>
                <a href="#">Movies</a>
                <a href="#">Dram</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
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