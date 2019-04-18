<template>
    <header class="header-section header-2">
        <div class="wrap-sticky" style="height: 93px">
            <nav class="navbar navbar-default bootsnav navbar-sticky on no-full">
                <div class="container">
                    <!--logo-->
                    <Logo></Logo>
                    <!--navbar-->
                    <Navbar></Navbar>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
    import Logo from "./HeaderLogo.vue"
    import Navbar from "./HeaderNavbar.vue"
    export default {
        name: "Header",
        components: {Logo, Navbar}
    }
</script>

<style scoped>

</style>