import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'
const pinia = createPinia()

import router from './router'

import './assets/main.css'
import 'remixicon/fonts/remixicon.css'

const app = createApp(App)

app.use(pinia).use(router).mount('#app')
