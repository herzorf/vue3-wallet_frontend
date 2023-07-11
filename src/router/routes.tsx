import { ItemCreate } from '../components/items/itemCreate/index.tsx'
import { ItemList } from '../components/items/itemList/index.tsx'
import { FirstAction, FirstMain } from '../components/welcome/first.tsx'
import { ForthAction, ForthMain } from '../components/welcome/forth.tsx'
import { SecondAction, SecondMain } from '../components/welcome/second.tsx'
import { ThirdAction, ThirdMain } from '../components/welcome/third.tsx'
import { Items } from '../view/items/index.tsx'
import { Start } from '../view/start/index.tsx'
import { Welcome } from '../view/welcome/index.tsx'

export const routes = [
    { path: '/', redirect: '/welcome/first' },
    {
        path: '/welcome', component: Welcome, redirect: '/welcome/first',
        children: [
            {
                path: 'first',
                name: "first",
                components: {
                    main: FirstMain,
                    footer: FirstAction,
                }
            },
            {
                path: 'second',
                name: "second",
                components: {
                    main: SecondMain,
                    footer: SecondAction,
                }
            },
            {
                path: 'third',
                name: "third",
                components: {
                    main: ThirdMain,
                    footer: ThirdAction,
                }
            },
            {
                path: 'forth',
                name: "forth",
                components: {
                    main: ForthMain,
                    footer: ForthAction,
                }
            },
        ]
    },
    { path: '/start', component: Start },
    {
        path: "/item", component: Items, children: [
            { path: "", component: ItemList },
            { path: "create", component: ItemCreate }
        ]
    }

]