<template>
    <div>
        <Banner></Banner>
        <Discover></Discover>
    </div>
</template>

<script>
    import Banner from "./BannerComponents/Banner.vue"
    import Discover from "./DiscoverComponents/Discover.vue"
    export default {
        name: "Home",
        components: {Banner, Discover}
    }
</script>

<style scoped>

</style>