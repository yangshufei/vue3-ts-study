import { createApp } from 'vue'

import 'normalize.css'
import './styles/index.scss'

import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

const app: ReturnType<typeof createApp> = createApp(App)

app.use(ElementPlus).use(store).use(router).mount('#app')
