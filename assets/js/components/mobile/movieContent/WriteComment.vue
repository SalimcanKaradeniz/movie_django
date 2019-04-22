<template>
    <div>
        <h2>Yorumunuzu yazın</h2>
        <div id="respond">
            <div class="cancel-comment-reply">
                <a id="cancel-comment-reply-link" href="#" style="display:none;">Cevabı iptal etmek için
                    tıklayın.</a>
            </div>
            <form id="commentform">
                        <textarea class="span7 grid" name="comment" id="comment" rows="3"
                                  placeholder="Yorumunuzu buraya yazabilirsiniz.">
                        </textarea>
                <input class="span4" type="text" name="author" id="author" placeholder=" Adınız"
                       tabindex="1"><br>
                <input class="span4" type="text" name="email" id="email" placeholder=" E-mail adresiniz"
                       tabindex="2">
                <div class="clear"></div>
            </form>
            <button class="w3-button w3-white w3-border w3-round-large">Yorum yap...</button>
            <div class="clear"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WriteComment"
    }
</script>

<style scoped>

</style>