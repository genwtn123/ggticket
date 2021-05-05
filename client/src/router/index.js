import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import History from '../views/History.vue'
import Buyfood from '../views/Buyfood.vue'
import BuyTicket from '../views/BuyTicket.vue'
import Theater from '../views/Theater.vue'
import Promotion from '../views/Promotion.vue'
import Seat from '../views/Seat.vue'
import Movie from '../views/Movie.vue'
import MovieSchedule from '../views/MovieSchedule.vue'

import ABuyfood from '../views/Buyfood_admin.vue'
import APromotion from '../views/Promotion_admin.vue'
import AMovie from '../views/Movie_admin.vue'
import Aschedule from '../views/Schedule_admin.vue'
import Atheater from '../views/Theater_admin.vue'

import AccountService from '../service/AccountService'
import store from "../plugins/vuex";

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: { guess: true },
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: { guess: true },
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { login: true },
    }
    , {
        path: '/buyticket',
        name: 'Buyticket',
        component: BuyTicket,
        meta: { login: true, step: true, food: true },
    },

    {
        path: '/history',
        name: 'History',
        component: History,
        meta: { login: true },
    },
    {
        path: '/buyfood',
        name: 'Buyfood',
        component: Buyfood,
        meta: { login: true, step: true, food: true },
    },
    {
        path: '/theaterselect',
        name: 'Theater',
        component: Theater,
        meta: { login: true, step: true },
    },
    {
        path: '/promotion',
        name: 'Promotion',
        component: Promotion,
        meta: { login: true },
    },
    {
        path: '/seat',
        name: 'Seat',
        component: Seat,
        meta: { login: true, step: true, seat: true },
    },
    {
        path: '/movie',
        name: 'Movie',
        component: Movie,
        meta: { login: true },
    },
    {
        path: '/movieschedule',
        name: 'MovieSchedule',
        component: MovieSchedule,
        meta: { login: true },
    },
    {
        path: '/afood',
        name: 'ABuyfood',
        component: ABuyfood,
        meta: { login: true, admin: true }


    },
    {
        path: '/apromo',
        name: 'APromotion',
        component: APromotion,
        meta: { login: true, admin: true }

    },
    {
        path: '/amovie',
        name: 'AMovie',
        component: AMovie,
        meta: { login: true, admin: true }

    },
    {
        path: '/aschedule',
        name: 'Aschedule',
        component: Aschedule,
        meta: { login: true, admin: true }

    },
    {
        path: '/atheater',
        name: 'Atheater',
        component: Atheater,
        meta: { login: true, admin: true }

    }
]

const router = new VueRouter({
    routes,
    mode: "history"
})

router.beforeEach(async (to, from, next) => {
    try {
        let isLoggedIn = !!await AccountService.getSession()
        let isselectedmovie = !!store.getters.getmovie != ""
        let isseletedshow = !!store.getters.getshow != ""
        let isselectedseat = !!store.getters.getseat != ""
        // if (isLoggedIn) {
        //     let keep = await AccountService.getSession()
        //     console.log(keep.data.type)
        //     console.log(isLoggedIn)
        //     let isAdmin = !!(keep.data.type == "STAFF")
        //     if (to.meta.admin && !isAdmin) {
        //         next({ name: 'Home' })
        //     }
        // }
        if (to.meta.login && !isLoggedIn) {
            next({ name: 'Login' })
        }

        if (to.meta.guess && isLoggedIn) {
            next({ name: 'Home' })
        }

        if (to.meta.step && !isselectedmovie) {
            next({ name: 'Movie' })
        }

        if (to.meta.step == undefined) {
            store.commit("keepmovie", "");
            store.commit("keepshow", "");
            store.commit("keepseat", "");
            store.commit("keepfood", "");
            store.commit("keepseatprice", "");
        }

        if (to.meta.seat && !isseletedshow) {
            next({ name: 'Movie' })
        }

        if (to.meta.food && !isselectedseat) {
            next({ name: 'Movie' })
        }

    } catch (err) {
        console.log(err)
    }

    next()
})

// router.beforeEach((to, from, next) =>{

// })

export default router
