import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginPage from "../pages/login/LoginPage";
import SignUpPage from "../pages/signup/SignUpPage";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUpPage
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
