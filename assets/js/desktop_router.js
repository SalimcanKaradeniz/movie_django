import Router from 'vue-router';
import Vue from 'vue';

import Home from "./components/desktop/Home.vue"

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }
];

const router = new Router({
    routes
});

export default router;