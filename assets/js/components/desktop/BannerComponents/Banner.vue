<template>
    <div class="slider-section slider-2 carousel bs-slider fade control-round indicators-line" id="bootstrap-touch-slider">
        <div class="slider-items carousel-inner">
            <div class="item">
                <!--image-->
                <BannerImage></BannerImage>
                <!--banner content-->
                <BannerContent></BannerContent>
            </div>
        </div>
    </div>
</template>

<script>
    import BannerImage from "./BannerImage.vue"
    import BannerContent from "./BannerContent.vue"
    export default {
        name: "Banner",
        components: {BannerImage, BannerContent}
    }
</script>

<style scoped>

</style>