import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home';
import Page from '../views/page';
import List from '../views/list'
Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/page', name: 'page', component: Page },
    { path: '/list', name: 'list', component: List },
];

export default new VueRouter({
    mode: 'history',
    routes,
});
