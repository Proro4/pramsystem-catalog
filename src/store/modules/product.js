import axios from 'axios';
import {
    PRODUCT_DETAIL,
} from '../mutation-types';

const state = {
    productDetail: null,
};

const getters = {
    productDetail: state => state.productDetail,
};

const actions = {
    [PRODUCT_DETAIL]: async ({commit}, id) => {
        try {
            let result = await axios.get('https://beta.pramsystem.com/api/half-price/products-catalog/'+id);
            commit(PRODUCT_DETAIL, result.data)
        } catch (e) {
            throw e;
        }
    },
};

const mutations = {
    [PRODUCT_DETAIL](state, status) {
        state.productDetail = status;
    },
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};