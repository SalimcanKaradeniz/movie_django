<template>
    <div class="singlepage">
            <a href="" class="post-page-numbers" v-for="moviepart in movieparts">
                <span>{{moviepart.text}}</span>
            </a>
        </div>
</template>

<script>
    export default {
        name: "MovieParts",
         data: function () {
            return {
                movieparts:
                    [
                        {
                            text: 'Part 1'
                        },
                        {
                            text: 'Part 2'
                        },
                        {
                            text: 'Part 3'
                        },
                        {
                            text: 'TEK PART VK'
                        },
                        {
                            text: 'TEK PART OK-RU'
                        },
                        {
                            text: 'LOAD '
                        },
                        {
                            text: 'FRAGMAN'
                        },
                        {
                            text: '5.812 kez izlendi'
                        },
                    ]
            }
        }
    }
</script>

<style scoped>

</style>