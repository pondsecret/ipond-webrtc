import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import('../views/LoginPage.vue')
    },
    {
        path: '/streaming',
        name: 'Stream',
        component: () => import('../views/Main/StreamingVideo.vue')
    },
    {
        path: '/streaming1',
        name: 'Stream1',
        component: () => import('../views/Main/StreamingVideo1.vue')
    },
    {
        path: '/streaming2',
        name: 'Stream2',
        component: () => import('../views/Main/StreamingVideo2.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router