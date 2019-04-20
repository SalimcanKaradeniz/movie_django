<template>
    <div id="app">
        <homeheader></homeheader>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    import homeheader from "./body/homeheader.vue";
    import Footer from "./body/Footer.vue";

    export default {
        name: "Mobile",
        components: {Footer, homeheader},
    }
</script>

<style scoped>

</style>