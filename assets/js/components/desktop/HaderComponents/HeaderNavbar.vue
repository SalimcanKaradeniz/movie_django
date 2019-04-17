<template>
    <div class="collapse navbar-collapse" id="navbar-menu">
        <ul class="nav navbar-nav navbar-left">
            <Item name="Anasayfa" :class="$route.fullPath === '/' ? 'selected' : ''"></Item>
            <Item name="Filmler"></Item>
            <Item name="Diziler"></Item>
            <Item name="Son Eklenenler"></Item>
            <Item name="Çok Yakında"></Item>
            <Item name="Listem"></Item>
        </ul>
    </div>
</template>

<script>
    import Item from "./HeaderNavbarItem.vue"
    export default {
        name: "HeaderNavbar",
        components: {Item}
    }
</script>

<style scoped>
</style>