import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
    state: {
        userData: {},
        beerData: {},
        history: []
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
        }
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
        }
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
        }
    }
})
