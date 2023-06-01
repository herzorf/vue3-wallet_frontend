import { First, FirstAction, FirstMain } from '../components/welcome/first.tsx'
import { Forth, ForthAction, ForthMain } from '../components/welcome/forth.tsx'
import { Second, SecondAction, SecondMain } from '../components/welcome/second.tsx'
import { Third, ThirdAction, ThirdMain } from '../components/welcome/third.tsx'
import { Start } from '../view/start/index.tsx'
import { Welcome } from '../view/welcome/index.tsx'

export const routes = [
    { path: '/', redirect: '/welcome/first' },
    {
        path: '/welcome', component: Welcome, redirect: '/welcome/first',
        children: [
            {
                path: 'first', components: {
                    main: FirstMain,
                    footer: FirstAction,
                }
            },
            {
                path: 'second', components: {
                    main: SecondMain,
                    footer: SecondAction,
                }
            },
            {
                path: 'third', components: {
                    main: ThirdMain,
                    footer: ThirdAction,
                }
            },
            {
                path: 'forth', components: {
                    main: ForthMain,
                    footer: ForthAction,
                }
            },
        ]
    },
    { path: '/start', component: Start },

]