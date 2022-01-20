require('./bootstrap');

import vue from 'vue';
import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.min.css'

window.Vue = vue;


import App from './components/App';
import VueAxios from 'vue-axios';
import axios from "axios";

import VueRouter from "vue-router";
import {routes} from "./routes";
import Vue from 'vue';

Vue.use(VueRouter);
Vue.use(VueAxios,axios);
Vue.use(Vuetify)
const  router = new VueRouter({
    mode:'history',
    routes: routes
});
const opts = {
    theme: {
        dark: false
        // themes: {
        //     dark: {
        //         primary: '#222831',
        //         secondary: '#393e46',
        //         info: '#d65a31',
        //         accent: '#eeeeee'
        //     }
        // }
    },
    icons: {
        iconfont: 'md'
    },
    components: {
    },
}
let vuetify = new Vuetify(opts)


const app = new Vue({
    vuetify : new Vuetify(),
    el:'#app',
    router:router,
    render:h=>h(App)
});
