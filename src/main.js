import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

import router from "./router/index"

import store from "./store/index"
import mstore from "./router/mrouterTest"

const app = createApp(App)
app.use(store).use(mstore).use(router).mount('#app')

