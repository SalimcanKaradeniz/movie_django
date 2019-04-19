<template>
    <div class="banner">
        <!--header-->
        <Header></Header>
        <!--container-->
        <Container></Container>
    </div>
</template>

<script>
    import Header from "./BannerHeader.vue"
    import Container from "./BannerContainer.vue"
    export default {
        name: "Banner",
        components: {Header, Container}
    }
</script>

<style scoped>

</style>