import {
    CATALOG_PAGE
} from '../mutation-types';

const state = {
    catalogPage: false,
};

const getters = {
    catalogPage: state => state.catalogPage,
};

const mutations = {
    [CATALOG_PAGE](state, status) {
        state.catalogPage = status;
    },
};


export default {
    namespaced: true,
    state,
    getters,
    mutations,
};