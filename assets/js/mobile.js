import Vue from 'vue';
import router from "./mobile_router.js"
import Home from "./components/mobile/Mobile.vue";

const app = new Vue({
    el: '#app',
    router,
    components: {
        Home
    }
});