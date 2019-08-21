import Vue from 'vue';
import Router from 'vue-router';
import Store from './store';
import auth from './modules/auth/index.vue'
import catalog from './modules/catalog/index.vue'

Vue.use(Router);

if (localStorage.getItem('auth')){
    Store.state.auth.isAuthentificated = true
} else{
    Store.state.auth.isAuthentificated = false
}

const ifAuthenticated = (to, from, next) => {
    if (Store.state.auth.isAuthentificated) {
        next();
        return
    }
    next('/');
};

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'auth',
            component: auth,
        },
        {
            path: '/catalog/',
            name: 'catalog',
            component: catalog,
            beforeEnter: ifAuthenticated,
        }
    ]
})