import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import axios from 'axios';
import store from './store';
import router from './router'
import vuetify from './plugins/vuetify'
import Toaster from 'v-toaster';
import 'v-toaster/dist/v-toaster.css';
import VueLodash from 'vue-lodash'
import 'vue-awesome/icons/flag'

const options = { name: 'lodash' };

Vue.use(Vuex);
Vue.use(Vuex,axios);
Vue.use(Toaster, {timeout: 5000});
Vue.use(VueLodash, options);

Vue.config.productionTip = false

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
