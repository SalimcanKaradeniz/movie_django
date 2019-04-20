<template>
    <div class="lolomo lolomo-spotlight">
        <div class="single-row-lomo has-inline-left-gutter lomo-scanned">
            <h2 class="lomo-name row-name">Kategori 1</h2>
            <div class="lomo has-inline-right-gutter">
                <a class="watch-title watch-title-1" v-for="img in images">
                    <div v-bind:style="img.text" class="title-boxart boyut"></div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "homepageCategory",
        data: function () {
            return {
                images: [
                    {
                        text: 'background-image:url(https://www.filmiifullizle.com/uploads/film/2018/03/olduren-tutku-passion-2012-turkce-dublaj-izle-935.jpg)',
                    },{
                        text: 'background-image:url(https://www.filmiifullizle.com/uploads/film/2018/03/olduren-tutku-passion-2012-turkce-dublaj-izle-935.jpg)',
                    },{
                        text: 'background-image:url(https://www.filmiifullizle.com/uploads/film/2018/03/olduren-tutku-passion-2012-turkce-dublaj-izle-935.jpg)',
                    },{
                        text: 'background-image:url(https://www.filmiifullizle.com/uploads/film/2018/03/olduren-tutku-passion-2012-turkce-dublaj-izle-935.jpg)',
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>