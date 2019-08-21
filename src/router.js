import Vue from 'vue';
import Router from 'vue-router';
import auth from './modules/auth/index.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'auth',
            component: auth
        }
    ]
})