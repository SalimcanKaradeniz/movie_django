<template>
    <div class="discover">
        <div class="discover-top">
            <div class="header-left">
                <div class="discover-header">
                    <span>Keşfet</span>
                </div>
            </div>
            <div class="header-right">
                <div class="discover-category">
                    <div class="drop" @click="category_drop">
                        <span class="drop-text" v-text="selected_category === '' ? 'Tür' : selected_category"></span>
                        <span class="drop-icon"><img src="/static/images/DesktopImages/down.png" alt=""></span>
                    </div>
                    <div class="drop-items" v-if="category_toggle">
                        <ul>
                            <li v-for="category in category_list" @click="category_filter(category)">{{category}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="discover-container">
            <div class="discover-row">
                <div class="category-name">
                    <span class="category-text">Komedi</span>
                    <span class="hide-next">Tümünü Gör</span>
                </div>
                <carousel :perPage="5" :navigationEnabled="true" :paginationEnabled="false">
                    <slide v-for="i in 10" :key="i">
                        <img class="filmimg"
                             src="https://womentainment.com/wp-content/uploads/2019/01/sex-education-netflix-review.jpg"
                             alt="" @click="film_click">
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
                                <span class="discover-film-type">Komedi &nbsp;<span class="circle"><img src="/static/images/DesktopImages/mini-circle.png" alt=""></span></span>
                                <span class="discover-film-type">Gençlik&nbsp;<span class="circle"><img src="/static/images/DesktopImages/mini-circle.png" alt=""></span></span>
                                <span class="discover-film-type">Erotik&nbsp;<span class="circle"><img src="/static/images/DesktopImages/mini-circle.png" alt=""></span></span>
                            </div>
                        </div>
                    </slide>
                </carousel>
            </div>
            <div class="discover-row">
                <div class="category-name">
                    <span class="category-text">Aksiyon</span>
                    <span class="hide-next">Tümünü Gör</span>
                </div>
                <carousel :perPage="5" :navigationEnabled="true" :paginationEnabled="false">
                    <slide v-for="i in 10" :key="i">
                        <img class="filmimg"
                             src="https://www.mobil13.com/wp-content/uploads/2019/01/1037177328.jpg"
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
                                <span class="discover-film-type">Komedi &nbsp;<span class="circle"><img src="/static/images/DesktopImages/mini-circle.png" alt=""></span></span>
                                <span class="discover-film-type">Gençlik&nbsp;<span class="circle"><img src="/static/images/DesktopImages/mini-circle.png" alt=""></span></span>
                                <span class="discover-film-type">Erotik&nbsp;<span class="circle"><img src="/static/images/DesktopImages/mini-circle.png" alt=""></span></span>
                            </div>
                        </div>
                    </slide>
                </carousel>
            </div>
            <div class="discover-row">
                <div class="category-name">
                    <span class="category-text">Aksiyon</span>
                    <span class="hide-next">Tümünü Gör</span>
                </div>
                <carousel :perPage="5" :navigationEnabled="true" :paginationEnabled="false">
                    <slide v-for="i in 4" :key="i">
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
                                <span class="discover-film-type">Komedi &nbsp;<span class="circle"><img src="/static/images/DesktopImages/mini-circle.png" alt=""></span></span>
                                <span class="discover-film-type">Gençlik&nbsp;<span class="circle"><img src="/static/images/DesktopImages/mini-circle.png" alt=""></span></span>
                                <span class="discover-film-type">Erotik&nbsp;<span class="circle"><img src="/static/images/DesktopImages/mini-circle.png" alt=""></span></span>
                            </div>
                        </div>
                    </slide>
                </carousel>
            </div>
            <div class="discover-row">
                <div class="category-name">
                    <span class="category-text">Aksiyon</span>
                    <span class="hide-next">Tümünü Gör</span>
                </div>
                <carousel :perPage="5" :navigationEnabled="true" :paginationEnabled="false">
                    <slide v-for="i in 10" :key="i">
                        <img class="filmimg"
                             src="https://cdn.bolgegundem.com/d/news/554998.jpg"
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
                                <span class="discover-film-type">Komedi &nbsp;<span class="circle"><img src="/static/images/DesktopImages/mini-circle.png" alt=""></span></span>
                                <span class="discover-film-type">Gençlik&nbsp;<span class="circle"><img src="/static/images/DesktopImages/mini-circle.png" alt=""></span></span>
                                <span class="discover-film-type">Erotik&nbsp;<span class="circle"><img src="/static/images/DesktopImages/mini-circle.png" alt=""></span></span>
                            </div>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
    import {Carousel, Slide} from 'vue-carousel';

    export default {
        name: "Discover",
        components: {
            Carousel,
            Slide
        },
        data: function () {
            return {
                category_toggle: false,
                selected_category: '',
                category_list: ['aksiyon', 'komedi', 'drama', 'korku'],
                active: false
            }
        },
        methods: {
            category_drop: function () {
                this.category_toggle = !this.category_toggle;
            },
            category_filter: function (category) {
                this.selected_category = category;
                this.category_toggle = false;
            },
            film_click: function () {
                this.$router.push({path: '/filmpage'})
            }
        }
    }
</script>

<style scoped>

</style>