import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
    state:{
        seat : [],
        ticket_id:"",
        food: []
    },
    mutations:{
        setTempOperatorContactId(state, operator_id){
            state.Temp.temp_operator_contact_id = operator_id
        }
    },
    getters:{
        isAuthenticated: (state) => {
            return state.user.username ? true : false
        }
    }
})

export default store