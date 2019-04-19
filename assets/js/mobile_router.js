import Router from 'vue-router';
import Vue from 'vue';
import contentBar from './components/mobile/body/contentBar.vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        component: contentBar,
        meta: {
            title: 'Anasayfa'
        }
    },
];

const router = new Router({
    routes
});

export default router;