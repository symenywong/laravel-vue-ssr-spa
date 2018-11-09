import Vue from 'vue';
import uniq from 'lodash/uniq';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        packages: [],
    },
    getters: {
       
    },
    mutations: {
        setPackages(state, { packages }) {
            state.packages = packages;
        },
    },
});