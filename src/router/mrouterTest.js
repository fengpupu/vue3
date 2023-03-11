import {createRouter,createWebHashHistory} from "./mrouter"
import Home from "../pages/home.vue"
import About from "../pages/about.vue"
import count from "../pages/count.vue"
const routes = [
    {
        name:'Home',
        path:'/',
        component:Home,
    },
    {
        name:'About',
        path:'/about',
        component:About,
    },
    {
        name:'Count',
        path:'/count',
        component:count
    }
]

const router = createRouter({
    routes:routes,
    history:createWebHashHistory()
})

export default router