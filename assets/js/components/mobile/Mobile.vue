<template>
    <div id="app">
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "./body/Header.vue";
    import Footer from "./body/Footer.vue";

    export default {
        name: "Mobile",
        components: {Header,Footer},
    }
</script>

<style scoped>

</style>