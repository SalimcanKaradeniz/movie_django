<template>
    <div class="navbar">
        <ul class="navbar-brand">
            <NavbarItem name="Home" :class="$route.fullPath === '/' ? 'active' : ''"></NavbarItem>
            <NavbarItem name="About"></NavbarItem>
            <NavbarItem name="News"></NavbarItem>
            <NavbarItem name="Discover"></NavbarItem>
            <NavbarItem name="Community"></NavbarItem>
        </ul>
    </div>
</template>

<script>
    import NavbarItem from "./HeaderNavbarItem.vue"
    export default {
        name: "HeaderNavbar",
        components: {NavbarItem}
    }
</script>

<style scoped>

</style>