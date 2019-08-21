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
    [CATALOG_LIST]: async ({commit}) => {
        try {
            let result = await axios.get('https://beta.pramsystem.com/api/half-price/products-catalog?title=' + '' + '&description=' + '' + '&model_number=' + '' + '&vendor_sku=' + '' + '&brand=' + '' + '&upc=' + '' + '&vendor=' + '' + '&cost_from=' + '' + '&cost_to=' + '' + '&on_hand_from=' + '' + '&on_hand_to=' + '' + '&created_at_from=' + '' + '&created_at_to=' + '' + '&sort=' + '' + '&direction=' + '' + 'desc&n=' + '' + '');
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