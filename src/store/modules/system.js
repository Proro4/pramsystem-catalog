import {
    CATALOG_PAGE,
    THEME_CHANGE
} from '../mutation-types';

const state = {
    catalogPage: false,
    activeTheme: localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark-theme'
};

const getters = {
    catalogPage: state => state.catalogPage,
    activeTheme: state => state.activeTheme,
};

const mutations = {
    [CATALOG_PAGE](state, status) {
        state.catalogPage = status;
    },
    [THEME_CHANGE](state, status) {
        state.activeTheme = status;
        localStorage.setItem('theme', status);
    }
};


export default {
    namespaced: true,
    state,
    getters,
    mutations,
};