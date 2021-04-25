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
    },
    {

        path: '/buyticket',
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
    }
    
]

const router = new VueRouter({
    routes,
    mode:"history"
})

// router.beforeEach((to, from, next) =>{

// })

export default router
