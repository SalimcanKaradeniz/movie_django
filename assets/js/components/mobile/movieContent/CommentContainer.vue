<template>
    <div id="containercomment">
        <div id="comments">
            <CommentList></CommentList>
            <WriteComment></WriteComment>
        </div>
    </div>
</template>

<script>
    import CommentList from "./CommentList.vue";
    import WriteComment from "./WriteComment.vue";

    export default {
        name: "CommentContainer",
        components: {WriteComment, CommentList}
    }
</script>

<style scoped>

</style>