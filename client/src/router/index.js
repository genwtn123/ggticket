import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../components/Login.vue'
import Register from '../views/Register.vue'
// import Hello from '../views/Hello.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

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

]

const router = new VueRouter({
    routes,
    mode:"history"
})

export default router