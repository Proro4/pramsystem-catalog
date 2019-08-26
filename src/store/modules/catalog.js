import axios from 'axios';
import {
    CATALOG_LIST,
    CATALOG_VENDORDS,
    CATALOG_PRELOAD,
    SWITCH_FILTER_SHOWS,
} from '../mutation-types';

const state = {
    catalogList: null,
    catalogListLength: null,
    catalogVendorsList: null,
    catalogVendors: [],
    catalogPreloader: false,
    switchFilterShows: false
};

const getters = {
    catalogList: state => state.catalogList,
    catalogListLength: state => state.catalogListLength,
    catalogVendorsList: state => state.catalogVendorsList,
    catalogVendors: state => state.catalogVendors,
    catalogPreloader: state => state.catalogPreloader,
    switchFilterShows: state => state.switchFilterShows,
};

const actions = {
    [CATALOG_LIST]: async ({commit}, payload) => {
        commit(CATALOG_PRELOAD, true);
        try {
            let result = await axios.get('https://beta.pramsystem.com/api/half-price/products-catalog?title=' + payload.title + '&description=' + payload.description + '&model_number=' + payload.modelNumber + '&vendor_sku=' + '' + '&brand=' + payload.brand + '&upc=' + payload.upc + '&vendor=' + payload.vendor + '&cost_from=' + payload.costFrom + '&cost_to=' + payload.costTo + '&on_hand_from=' + payload.onHandFrom + '&on_hand_to=' + payload.onHandTo + '&created_at_from=' + payload.dateFrom + '&created_at_to=' + payload.dateTo + '&sort=' + payload.sort + '&direction=' + '' + 'desc&n=' + payload.n + '&page='+payload.page);
            commit(CATALOG_LIST, result.data)
        } catch (e) {
            throw e;
        } finally {
            commit(CATALOG_PRELOAD, false);
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
        state.catalogList = status.data;
        state.catalogListLength = status.total;
    },
    [CATALOG_VENDORDS](state, status) {
        let key;
        state.catalogVendorsList = status;
        state.catalogVendors.push({id:'all', name:'all'});
        for (key in state.catalogVendorsList) {
            let item = state.catalogVendorsList[key];
            let element = {id:key, name:item};
            state.catalogVendors.push(element);
        }
    },
    [CATALOG_PRELOAD](state, status) {
        state.catalogPreloader = status;
    },
    [SWITCH_FILTER_SHOWS](state, status){
        state.switchFilterShows = status;
    }
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};