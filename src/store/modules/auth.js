import {
    AUTH_USER,
    LOGOUT
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
        if(state.authUser.name == 'admin' && state.authUser.password == '1234'){
             state.isAuthentificated = true;
             state.authErrorMessage = 'You are logged in';
             localStorage.setItem('auth', 'true');
        }else{
             state.authErrorMessage = 'Wrong username or password entered.'
        }
    },
    [LOGOUT](state){
        localStorage.removeItem('auth');
        state.isAuthentificated = false;

    }
};



export default {
    namespaced: true,
    state,
    getters,
    mutations,
};