import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

import History from '../views/History.vue'
import Buyfood from '../views/Buyfood.vue'
import BuyTicket from '../views/BuyTicket.vue'
import BuyTicketInfo from '../views/BuyTicketInfo.vue'
import Promotion from '../views/Promotion.vue'
import Seat from '../views/Seat.vue'

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
        path: '/buyticketinfomation',
        name: 'BuyTicketInfo',
        component: BuyTicketInfo
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

    }

]

const router = new VueRouter({
    routes,
    mode:"history"
})

// router.beforeEach((to, from, next) =>{

// })

export default router
