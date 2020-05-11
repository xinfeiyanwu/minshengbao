import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/view/Home.vue'),
    },
    {
        path: '/Cart',
        name: 'Cart',
        component: () => import('@/view/Cart.vue'),
    },
    {
        path: '/Self',
        name: 'Self',
        component: () => import('@/view/Self.vue'),
    },
    {
        path: '/Shopping',
        name: 'Shopping',
        component: () => import('@/view/Shopping.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to,from,next) => {   
    store.commit('zeroSet')
    next();
})

export default router;