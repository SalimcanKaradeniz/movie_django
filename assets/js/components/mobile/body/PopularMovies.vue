<template>
    <aside id="sidebar" class="span3 grid-right fit">
        <div class="yanmenu">
            <div class="heiki">
                <i class="fa fa-bars">
                </i>
                Kategoriler
            </div>
            <div class="menu-kategoriler-container">
                <ul id="menu-kategoriler" class="menu">
                    <li id="menu-item-11"
                        class="fa fa-film menu-item menu-item-type-taxonomy menu-item-object-category menu-item-11"
                    v-for="categorys in menukategori">
                        <a href="#">{{categorys.category}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
</template>

<script>
    export default {
        name: "popularMovies",
        data:function(){
            return{
                menukategori:
                    [
                        {
                            category:'Aile',
                        },
                        {
                            category:'Aksiyon & Macera',
                        },
                        {
                            category:'Dram',
                        },
                        {
                            category:'Romantik',
                        },
                        {
                            category:'Korku',
                        },
                        {
                            category:'Erotizm',
                        },
                    ]
            }
        }
    }
</script>

<style scoped>

</style>