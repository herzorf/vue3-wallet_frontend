import { First } from '../components/welcome/first.tsx'
import { Forth } from '../components/welcome/forth.tsx'
import { Second } from '../components/welcome/second.tsx'
import { Third } from '../components/welcome/third.tsx'
import { Start } from '../view/start/index.tsx'
import { Welcome } from '../view/welcome/index.tsx'

export const routes = [
    { path: '/', redirect: '/welcome/first' },
    {
        path: '/welcome', component: Welcome, redirect: '/welcome/first',
        children: [
            { path: 'first', component: First },
            { path: 'second', component: Second },
            { path: 'third', component: Third },
            { path: 'forth', component: Forth },
        ]
    },
    { path: '/start', component: Start },

]