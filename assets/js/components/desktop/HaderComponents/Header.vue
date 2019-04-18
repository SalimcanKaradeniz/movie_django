<template>
    <div class="header">
        <div class="header-main">
            <!--logo-->
            <Logo></Logo>
            <!--navbar-->
            <Navbar></Navbar>
        </div>
    </div>
</template>

<script>
    import Logo from "./Logo.vue"
    import Navbar from "./HeaderNavbar.vue"
    export default {
        name: "Header",
        components: {Logo, Navbar}
    }
</script>

<style scoped>

</style>