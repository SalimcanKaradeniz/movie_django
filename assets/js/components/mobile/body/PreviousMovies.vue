<template>
    <div class="containable">
        <h3 class="containable-headline">Öne Çıkanlar</h3>
        <div class="containable-list">
            <div class="carousel">
                <div class="carousel-wrap">
                    <div class="segment-item" v-for="previous in previousmovie">
                        <a class="segment-item-link" href="#">
                            <div class="image-component segment-item-thumbnail">
                                <div class="image-component__placeholder vertical-thumbnail-7x10">
                                    <img alt="Fi"
                                         v-bind:src="previous.movie"
                                         data-reactid="91">
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PreviousMovies",
        data: function () {
            return {
                previousmovie:
                    [
                        {
                            movie:'//puhutv-img.akamaized.net/q-xHqURz1HKUH9-W7T79nGjjANI=/107x152/uploads/1510312659-oczlizbftwdlpjde-74f08c4e021e8cd228304932a3f69d0b/7x10_ci.jpg'
                        },
                        {
                            movie:'//puhutv-img.akamaized.net/q-xHqURz1HKUH9-W7T79nGjjANI=/107x152/uploads/1510312659-oczlizbftwdlpjde-74f08c4e021e8cd228304932a3f69d0b/7x10_ci.jpg'
                        },
                        {
                            movie:'//puhutv-img.akamaized.net/q-xHqURz1HKUH9-W7T79nGjjANI=/107x152/uploads/1510312659-oczlizbftwdlpjde-74f08c4e021e8cd228304932a3f69d0b/7x10_ci.jpg'
                        },
                        {
                            movie:'//puhutv-img.akamaized.net/q-xHqURz1HKUH9-W7T79nGjjANI=/107x152/uploads/1510312659-oczlizbftwdlpjde-74f08c4e021e8cd228304932a3f69d0b/7x10_ci.jpg'
                        },
                    ]
            }
        },
    }
</script>

<style scoped>

</style>