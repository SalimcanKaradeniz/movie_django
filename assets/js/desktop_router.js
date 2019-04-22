import Router from 'vue-router';
import Vue from 'vue';

import Home from "./components/desktop/Home.vue"
import FilmPage from "./components/desktop/FilmPageComponents/FilmPage.vue"

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/filmpage',
        name: 'FilmPage',
        component: FilmPage
    }
];

const router = new Router({
    routes
});

export default router;