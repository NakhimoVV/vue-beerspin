import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
    state: {
        userData: {},
        beerData: {},
        cloneBeerData: {}
    },
    mutations: {
        SET_USERDATA_TO_STATE: (state, userData) => {
            state.userData = userData;
        },
        SET_BEERDATA_TO_STATE: (state, beerData) => {
            state.beerData = beerData;
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
    },
    getters: {
        USERDATA(state) {
            return state.userData;
        },
        BEERDATA(state) {
            return state.beerData;
        },
        CLONE_BEERDATA() {
            return Object.assign({}, 'BEERDATA');
        }
    }
})
