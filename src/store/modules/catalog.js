import axios from 'axios';
import {
    CATALOG_LIST,
    CATALOG_VENDORDS,
} from '../mutation-types';

const state = {
    catalogList: null,
    catalogVendorsList: null,
    catalogVendors: [],
};

const getters = {
    catalogList: state => state.catalogList,
    catalogVendorsList: state => state.catalogVendorsList,
    catalogVendors: state => state.catalogVendors,
};

const actions = {
    [CATALOG_LIST]: async ({commit}, payload) => {
        try {
            let result = await axios.get('https://beta.pramsystem.com/api/half-price/products-catalog?title=' + payload.title + '&description=' + payload.description + '&model_number=' + payload.modelNumber + '&vendor_sku=' + '' + '&brand=' + payload.brand + '&upc=' + payload.upc + '&vendor=' + payload.vendor + '&cost_from=' + payload.costFrom + '&cost_to=' + payload.costTo + '&on_hand_from=' + payload.onHandFrom + '&on_hand_to=' + payload.onHandTo + '&created_at_from=' + '' + '&created_at_to=' + '' + '&sort=' + '' + '&direction=' + '' + 'desc&n=' + '' + '');
            commit(CATALOG_LIST, result.data.data)
        } catch (e) {
            throw e;
        }
    },
    [CATALOG_VENDORDS]: async ({commit}) => {
        try {
            let result = await axios.get('https://beta.pramsystem.com/api/half-price/vendors');
            commit(CATALOG_VENDORDS, result.data)
        } catch (e) {
            throw e;
        }
    }
};

const mutations = {
    [CATALOG_LIST](state, status) {
        state.catalogList = status;
    },
    [CATALOG_VENDORDS](state, status) {
        let key;
        state.catalogVendorsList  = status;
        state.catalogVendors.push('all');
        for(key in state.catalogVendorsList){
            let item = state.catalogVendorsList[key];
            state.catalogVendors.push(item);
        }

    },
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};