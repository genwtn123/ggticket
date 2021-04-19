import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../components/Login.vue'
import Register from '../views/Register.vue'
// import Hello from '../views/Hello.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Buyfood from '../views/Buyfood.vue'
import BuyTicket from '../views/BuyTicket.vue'
import BuyTicketInfo from '../views/BuyTicketInfo.vue'
import Promotion from '../views/Promotion.vue'

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
        path: '/buyfood',
        name: 'Buyfood',
        component: Buyfood
    },
    {
        path: '/buyticket',
        name: 'BuyTicket',
        component: BuyTicket
    },
    {
        path: '/buyticketinfo',
        name: 'BuyTicketInfo',
        component: BuyTicketInfo
    },
    {
        path: '/promotion',
        name: 'Promotion',
        component: Promotion
    }

]

const router = new VueRouter({
    routes,
    mode:"history"
})

export default router
