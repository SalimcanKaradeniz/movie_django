<template>
    <div class="yanmenu">
        <div class="heiki">
            <i class="fa fa-thumbs-up">
            </i>
            En beğeniler
        </div>
        <ul class="widget_film">
            <li v-for="a in allstarmovies">
                <span>
                    <a href="#">
                        <div class="film-afis">
                            <figure>
                                <img src="http://test.wptemalari.net/promovie/wp-content/themes/wpt-promovie/timthumb.php?src=http://test.wptemalari.net/promovie/wp-content/uploads/hayal-ulkesi-jauja-2014-turkce-dublaj-izle-178x244.jpg&w=36&h=50&zc=0"
                                     class="alignleft" width="36px;" height="50">

                            </figure>
                        </div>
                        <h3>{{a.movie}}</h3>
                    </a>
                </span>
                <span>
                    <b> 6.4</b>
                    /10 - Türkçe Dublaj
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "allstarmovie",
        data:function(){
            return{
                allstarmovies:
                    [
                        {
                            movie:'Hayal Ülkesi – Jauja Türkçe Dublaj izle'
                        },
                        {
                            movie:'Son Cadı Avcısı– Jauja Türkçe Dublaj izle'
                        },
                        {
                            movie:'Saturn – Jauja Türkçe Dublaj izle'
                        },
                        {
                            movie:'Korku Kapanı– Jauja Türkçe Dublaj izle'
                        },
                        {
                            movie:'Jet aşkı– Jauja Türkçe Dublaj izle'
                        },
                    ]
            }
        }
    }
</script>

<style scoped>

</style>