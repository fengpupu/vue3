import {ref,inject} from 'vue'
const ROUTER_KEY = Symbol()

function createRouter(options){
    return new Router(options)
} 
function useRouter(){
    return inject(ROUTER_KEY)
}
function createWebHashHistory(){
    function bindEvents(fn){
        window.addEventListener('hashchange',fn)
    }
    return {
        url:window.location.hash.slice(1)||'/',
        bindEvents
    }
}
class Router{
    constructor(options){
        this.history = options.history
        this.routes = options.routes
        this.current = ref(this.history.url)
        
        this.history.bindEvents(()=>{
            console.log('change')
            this.current.value = window.location.hash.slice(1)
        })
    }
    install(app){
        app.provide(ROUTER_KEY,this)
    }
}
export {
    useRouter,createRouter,createWebHashHistory
}