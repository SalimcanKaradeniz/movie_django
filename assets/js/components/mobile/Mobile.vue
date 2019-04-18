<template>
    <div id="app">
        <Header></Header>
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from "./body/Header.vue";
    // import Footer from "./body/Footer.vue";
    export default {
        name: "Mobile",
        components: {Header}
    }
</script>

<style scoped>

</style>