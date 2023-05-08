import { First } from '../components/welcome/first.tsx'
import { Forth } from '../components/welcome/forth.tsx'
import { Second } from '../components/welcome/second.tsx'
import { Third } from '../components/welcome/third.tsx'
import { Bar } from '../view/bar.tsx'
import { Foo } from '../view/foo.tsx'
import { Welcome } from '../view/welcome/index.tsx'

export const routes = [
    { path: "/", component: Bar },
    { path: '/foo', component: Foo },
    {
        path: '/welcome', component: Welcome,
        children: [
            { path: 'first', component: First },
            { path: 'second', component: Second },
            { path: 'third', component: Third },
            { path: 'forth', component: Forth },
        ]
    },

]