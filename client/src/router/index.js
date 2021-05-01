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

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name:'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    }
    ,{
        path: '/buy',
        name: 'Buyticket',
        component: BuyTicket
    },

    {
        path: '/history',
        name: 'History',
        component: History
    },
    {
        path: '/buyfood',
        name: 'Buyfood',
        component: Buyfood
    },
    {
        path: '/theaterselect',
        name: 'Theater',
        component: Theater
    },
    {
        path: '/promotion',
        name: 'Promotion',
        component: Promotion
    },
    {
        path: '/seat',
        name: 'Seat',
        component: Seat
    },
    {
        path: '/movie',
        name: 'Movie',
        component: Movie
    },
    {
        path: '/movieschedule',
        name: 'MovieSchedule',
        component: MovieSchedule
    },
    {
        path: '/afood',
        name: 'ABuyfood',
        component: ABuyfood

    },
    {
        path: '/apromo',
        name: 'APromotion',
        component: APromotion

    },
    {
        path: '/amovie',
        name: 'AMovie',
        component: AMovie

    },
    {
        path: '/aschedule',
        name: 'Aschedule',
        component: Aschedule

    },
    {
        path: '/atheater',
        name: 'Atheater',
        component: Atheater

    }
]

const router = new VueRouter({
    routes,
    mode:"history"
})

// router.beforeEach((to, from, next) =>{

// })

export default router
