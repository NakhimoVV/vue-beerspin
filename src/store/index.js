import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
    state: {
        userData: {},
        beerData: {},
        history: [],
        isSpinShake: false,
        isSpinGlassBeer: true,
        isMobViewHis: false,
    },
    mutations: {
        SET_USERDATA_TO_STATE: (state, userData) => {
            state.userData = userData;
        },
        SET_BEERDATA_TO_STATE: (state, beerData) => {
            state.beerData = beerData;
        },
        SET_HISTORY_TO_STATE: (state) => {
            if (state.beerData === state.history[state.history.length - 1]) {
                alert('Уже выпито!');
            }
            else {
                state.history.push(state.beerData);
            }
        },
        REMOVE_HISTORY_TO_STATE: (state) => {
            state.history.splice(0, state.history.length);
        },
        CHANGE_SPIN_1: (state) => {
            state.isSpinShake = !state.isSpinShake;
        },
        CHANGE_SPIN_2: (state) => {
            state.isSpinGlassBeer = !state.isSpinGlassBeer;
        },
        CHANGE_MOB_HISTORY: (state) => {
            state.isMobViewHis = !state.isMobViewHis;
        },
    },
    actions: {
        GET_USERDATA_FROM_API({ commit }) {
            return axios('https://random-data-api.com/api/users/random_user', {
                method: "GET"
            })
                .then((userData) => {
                    commit('SET_USERDATA_TO_STATE', userData.data)
                    return userData;
                })
                .catch((error) => {
                    console.log(error)
                    return error;
                })
        },
        GET_BEERDATA_FROM_API({ commit }) {
            return axios('https://random-data-api.com/api/beer/random_beer', {
                method: "GET"
            })
                .then((beerData) => {
                    commit('SET_BEERDATA_TO_STATE', beerData.data)
                    return beerData;
                })
                .catch((error) => {
                    console.log(error)
                    return error;
                })
        },
        ADD_TO_HISTORY({ commit }) {
            commit('SET_HISTORY_TO_STATE');
        },
        DELETE_HISTORY({ commit }) {
            commit('REMOVE_HISTORY_TO_STATE');
        },
        TOGGLE_SPIN_1({ commit }) {
            commit('CHANGE_SPIN_1')
        },
        TOGGLE_SPIN_2({ commit }) {
            commit('CHANGE_SPIN_2')
        },
        TOGGLE_MOB_HISTORY({ commit }) {
            commit('CHANGE_MOB_HISTORY')
        },
    },
    getters: {
        USERDATA(state) {
            return state.userData;
        },
        BEERDATA(state) {
            return state.beerData;
        },
        HISTORY(state) {
            return state.history;
        },
        SPIN_STATE_1(state) {
            return state.isSpinShake;
        },
        SPIN_STATE_2(state) {
            return state.isSpinGlassBeer;
        },
        MOB_HISTORY(state) {
            return state.isMobViewHis;
        },
    }
})
