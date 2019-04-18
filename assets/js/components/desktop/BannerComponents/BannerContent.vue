<template>
    <div class="slider-content">
        <!--banner film name-->
        <h1>Film Name</h1>
        <!--button-->
        <Button></Button>
        <!--desciption-->
        <Description></Description>
    </div>
</template>

<script>
    import Button from "./Button.vue"
    import Description from "./BannerDescription.vue"
    export default {
        name: "BannerContent",
        components: {Button, Description}
    }
</script>

<style scoped>

</style>