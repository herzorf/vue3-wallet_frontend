import { createApp } from 'vue'
import './style.css'
import { App } from './App.tsx'
import { Bar } from './view/bar.tsx'
import { Foo } from './view/foo.tsx'
import { createRouter, createWebHistory } from "vue-router"
const routes = [
    { path: "/", component: Bar },
    { path: '/foo', component: Foo },
]
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})

const app = createApp(App)
app.use(router)
app.mount('#app')
