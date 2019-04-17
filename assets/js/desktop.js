import Vue from 'vue';
import router from "./desktop_router.js"

import Home from "./components/desktop/Desktop.vue";


const app = new Vue({
    el: '#app',
    router,
    components: {
        Home
    }
});