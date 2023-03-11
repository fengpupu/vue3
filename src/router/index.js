import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

import Home from "../pages/home.vue"
import About from "../pages/about.vue"
import count from "../pages/count.vue"
import transition  from '../pages/transition/index.vue'

const routes = [
    {
        name:'Home',
        path:'/',
        component:transition,
    },
    {
        name:'About',
        path:'/about',
        component:About,
    },
    {
        name:'Count',
        path:'/count',
        component:()=>count
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router
