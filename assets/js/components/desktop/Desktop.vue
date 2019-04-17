<template>
    <div id="app" class="wrapper">
        <div class="main home-3">
            <Header></Header>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Header from "./HaderComponents/Header.vue"

    export default {
        name: "Desktop",
        components: {Header}
    }
</script>

<style scoped>

</style>