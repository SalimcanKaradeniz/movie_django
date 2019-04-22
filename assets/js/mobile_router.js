import Router from 'vue-router';
import Vue from 'vue';
import ContentBar from './components/mobile/body/ContentBar.vue';
import MovieVideoParent from './components/mobile/movieContent/MovieVideoParent.vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        component: ContentBar,
        meta: {
            title: 'Anasayfa'
        }
    },
    {
        path: '/MovieVideoParent',
        component: MovieVideoParent,
        meta: {
            title: 'MovieVideoParent'
        }
    },
];

const router = new Router({
    routes
});

export default router;