
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from "vue";
import VueRouter from 'vue-router';
import G2 from '@antv/g2';
import router from './routes/index';
import store from './store/index';
import plugin from './plugin';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(iView);
Vue.use(plugin);

Vue.use(G2);
import App from './views/App';
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

var app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
