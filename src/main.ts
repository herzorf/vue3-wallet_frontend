import { createApp } from 'vue'
import './style.css'
import { App } from './App.tsx'
import { createRouter } from "vue-router"
import { routes } from './router/routes.tsx'
import { history } from './shared/history.ts'
import "@svgstore"
const router = createRouter({
    history,
    routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
