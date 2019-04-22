<template>
    <div class="film_page">
        <div class="film-top">
            <Film></Film>
            <div class="rating">
                <header class='header text-center'>
                    <h2>Sizin Puanınız</h2>
                    <p>Verdiğiniz puanlar <b>Öne Çıkanları</b> ve <b>Popülerliği</b> etkileyecektir.</p>
                </header>
                <div class="user-star-rating">
                    <star-rating></star-rating>
                </div>
            </div>
        </div>
        <div class="film-content">
            <div class="content-left">
                <div class="single-content video">
                    <div class="action-buttons clearfix">
                        <div class="old-part-system" id="action-parts"></div>
                        <div class="align-right">
                            <div class="action" id="action-share">
                                <button class="button share-button arrow-bottom trigger" type="button">
                                    <span class="icon-share-1 iconfix">Paylaş</span>
                                </button>
                            </div>
                            <div class="action" id="action-report">
                                <button class="button share-button arrow-bottom trigger" type="button">
                                    <span class="icon-share-1 iconfix">Bildir</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="video-content">
                        <div class="autosize-container">
                            <p>
                                <iframe src="https://player.vimeo.com/video/54703699" width="600" height="350"
                                        allowfullscreen frameborder="0"></iframe>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-right">
                <header class='header text-center'>
                    <h2>Benzer Filmler</h2>
                    <p><b>Öldüren Tutku</b> filmi kategorisi için en fazla <b>eşleşen</b> filmler</p>
                </header>
                <carousel :perPage="3" :navigationEnabled="true" :paginationEnabled="false">
                    <slide v-for="i in 10" :key="i">
                        <img class="filmimg"
                             src="https://listelist.com/wp-content/uploads/2018/08/33-2019-yilinin-merakla-beklenen-filmleri-hobbs-and-shaw.jpg"
                             alt="">
                        <div class="filmimg-container">
                            <div class="discover-detail-top">
                                <div class="discover-icon">
                                    <img src="/static/images/DesktopImages/play.png" alt="">
                                </div>
                                <div class="discover-minute">
                                    <span class="min">120 dk</span>
                                </div>
                            </div>
                            <div class="discover-detail-body">
                                <div class="discover-filmname">Sex Education</div>
                            </div>
                            <div class="discover-detail-bottom">
                                <span class="discover-film-type">Komedi &nbsp;<span class="circle"><img
                                        src="/static/images/DesktopImages/mini-circle.png" alt=""></span></span>
                                <span class="discover-film-type">Gençlik&nbsp;<span class="circle"><img
                                        src="/static/images/DesktopImages/mini-circle.png" alt=""></span></span>
                                <span class="discover-film-type">Erotik&nbsp;<span class="circle"><img
                                        src="/static/images/DesktopImages/mini-circle.png" alt=""></span></span>
                            </div>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>
        <div class="film-bottom">
            <div class="left-comments">
                <header class='header text-center'>
                    <h2>Yorum Bırakın!</h2>
                </header>
                <form>
                    <input name="name" type="text" class="feedback-input" placeholder="Ad Soyad"/>
                    <input name="email" type="text" class="feedback-input" placeholder="Email"/>
                    <textarea name="text" class="feedback-input" placeholder="Yorum..."></textarea>
                    <input type="submit" value="Gönder"/>
                </form>
            </div>
            <div class="right-comments">
                <header class='header text-center'>
                    <h2>Eleştirmen Yorumları</h2>
                </header>
                <div class="comments">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error alias ab enim est consequatur,
                        porro
                        esse distinctio laborum saepe perferendis dicta perspiciatis repellendus tempore praesentium,
                        quaerat
                        inventore quas, eaque nisi!
                        <span>in 08.09.2016</span>
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error alias ab enim est consequatur,
                        porro
                        esse distinctio laborum saepe perferendis dicta perspiciatis repellendus tempore praesentium,
                        quaerat
                        inventore quas, eaque nisi!
                        <span>in 08.09.2016</span>
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error alias ab enim est consequatur,
                        porro
                        esse distinctio laborum saepe perferendis dicta perspiciatis repellendus tempore praesentium,
                        quaerat
                        inventore quas, eaque nisi!
                        <span>in 08.09.2016</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Film from "../BannerComponents/BannerFilm.vue"
    import StarRating from 'vue-star-rating'
    import {Carousel, Slide} from 'vue-carousel';

    export default {
        name: "FilmPage",
        components: {Film, StarRating, Carousel, Slide}
    }
</script>

<style scoped>

</style>