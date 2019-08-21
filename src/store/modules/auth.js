import {
    AUTH_USER
} from '../mutation-types';

const state = {
    authUser: null,
    isAuthentificated: false,
    authErrorMessage: false,
};

const getters ={
    authUser: state => state.authUser,
    isAuthentificated: state => state.isAuthentificated,
    authErrorMessage: state => state.authErrorMessage,
};


const mutations ={
    [AUTH_USER](state, status){
        state.authUser = status;
        if(state.authUser.name == 'admin' && state.authUser.password == '12345678'){
            state.isAuthentificated = true;
        }else{
            state.authErrorMessage = 'Веден неправильный логин или пароль.'
        }
    }
};



export default {
    namespaced: true,
    state,
    getters,
    mutations,
};