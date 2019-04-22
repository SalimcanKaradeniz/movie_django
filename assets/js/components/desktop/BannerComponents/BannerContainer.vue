<template>
    <div class="banner-container">
        <!--film-->
        <Film></Film>
        <div class="film-list">
            <div class="film">
                <img src="https://asturscore.com/wp-content/uploads/2016/10/Moonlight.jpg" alt="">
                <div class="play-button">
                    <div class="button-icon">
                        <img src="/static/images/DesktopImages/play.png" alt="">
                    </div>
                    <div class="button-text"><span>Başlat</span></div>
                </div>
                <div class="film-detail">
                    <div class="film-name">
                        <span>Öldüren Tutku</span>
                    </div>
                    <div class="film-description">
                        <div class="description-top">
                            <div class="top film-created">
                                <p>Yayınlanma tarihi</p>
                                <span>12.10.2019</span>
                            </div>
                            <div class="top film-genre">
                                <p>Film Türü</p>
                                <span>aksiyon, komedi</span>
                            </div>
                        </div>
                        <div class="film-subject">
                            <p>Konu</p>
                            <span>1500'lerden beri kullanılmakta olan standard Lorem Ipsum metinleri ilgilenenler için yeniden üretilmiştir. Çiçero tarafından yazılan 1.10.32 ve 1.10.33 bölümleri de 1914 H. Rackham çevirisinden</span>
                        </div>
                    </div>
                    <div class="description-bottom">
                        <div class="imdb-rating">
                            <p>7/10</p>
                            <span>imdb puanı</span>
                        </div>
                        <div class="users-rating">
                            <p>8/10</p>
                            <span>kullanıcı puanı</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Film from "./BannerFilm.vue"
    export default {
        name: "BannerContainer",
        components: {Film}
    }
</script>

<style scoped>

</style>