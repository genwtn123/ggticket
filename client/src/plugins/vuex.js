import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const store = new Vuex.Store({
    // plugins: [createPersistedState({
    //     storage: window.sessionStorage,
    // })],
    state:{
        seat : [],
        ticket_id:"",
        food: [],
        movie:"",
        show:"",
        seatprice:0
    },
    mutations:{
        keepmovie(state, movie){
            state.movie = movie
        },
        keepshow(state, show){
            state.show = show
        },
        keepseat(state, seat){
            state.seat = seat
        },
        keepfood(state, food){
            state.food = food
        },
        keepseatprice(state, price){
            state.seatprice = price
        }
    },
    getters:{
        getmovieid: (state) => {
            return state.movie.movie_id
        },
        getmovie:(state) =>{
            return state.movie
        },
        getshow:(state) =>{
            return state.show
        },
        getseat:(state) => {
            return state.seat
        },
        getfood:(state) => {
            return state.food
        },
        getseatprice:(state) => {
            return state.seatprice
        }
    }
})

export default store